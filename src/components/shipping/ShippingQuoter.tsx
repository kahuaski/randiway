"use client";
import React, { useState } from "react";
import { shippingService, AddressInfo } from "@/service/shippingService";
import { Package, Truck, AlertCircle } from "lucide-react";

const formatterCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

interface ShippingQuoterProps {
  originId: string; // Identifica la bodega/tienda de salida (ej: "bogota")
  codigoPostalDestino: string; // El código que escribió el cliente
  addressTo?: AddressInfo;
  onSelectRate?: (rateId: string, price: number) => void; // Función para pasar el precio al total a pagar
}

export function ShippingQuoter({ originId, codigoPostalDestino, addressTo, onSelectRate }: ShippingQuoterProps) {
  const [tarifas, setTarifas] = useState<any[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tarifaSeleccionada, setTarifaSeleccionada] = useState<string | null>(null);

  const handleCotizar = async () => {
    if (!codigoPostalDestino) {
      setError("Por favor, ingresa un código postal de destino válido.");
      return;
    }

    setCargando(true);
    setError(null);
    setTarifas([]);

    try {
      // El originId se resuelve en el servidor (/api/shipping/quote)
      // usando las variables de entorno ORIGEN_<ID>_*
      const data = await shippingService.crearCotizacion(originId, { ...addressTo, postal_code: codigoPostalDestino });

      const rawRates = Array.isArray(data?.data)
        ? data.data.filter((r: any) => r?.type === "rates")
        : (data?.quotation?.rates || data?.rates || []);

      const ratesEncontradas = rawRates
        .filter((rate: any) => {
          const attrs = rate?.attributes || rate;
          return attrs?.success === true;
        })
        .map((rate: any) => {
          const attrs = rate?.attributes || rate;
          return {
            id: rate?.id || attrs?.id,
            carrier_name: attrs?.provider_display_name || attrs?.provider_name || attrs?.carrier?.name || attrs?.carrier_name || "Paquetería",
            delivery_type: attrs?.provider_service_name || attrs?.service || attrs?.delivery_type || "Estándar",
            total_pricing: attrs?.amount_local ?? attrs?.amount ?? attrs?.total_pricing ?? attrs?.total ?? "0",
            currency: attrs?.currency_local ?? attrs?.currency_code ?? attrs?.currency ?? "COP",
            days: attrs?.days,
          };
        });

      if (ratesEncontradas.length === 0) {
        setError("No se encontraron paqueterías disponibles para esta ruta.");
      } else {
        setTarifas(ratesEncontradas);
      }
    } catch (err: any) {
      setError(err.message || "Ocurrió un error al cotizar el envío.");
    } finally {
      setCargando(false);
    }
  };

  const seleccionarTarifa = (tarifa: any) => {
    setTarifaSeleccionada(tarifa.id);
    if (onSelectRate) {
      onSelectRate(tarifa.id, parseFloat(tarifa.total_pricing));
    }
  };

  return (
    <div className="w-full bg-zinc-50 border border-zinc-200 p-5 rounded-xl mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-zinc-700 flex items-center gap-2">
          <Package size={18} className="text-emerald-600" />
          Opciones de Envío
        </h3>

        <button
          type="button"
          onClick={handleCotizar}
          disabled={cargando || !codigoPostalDestino}
          className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
        >
          {cargando ? "Cotizando..." : "Ver Tarifas"}
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm mb-4">
          <AlertCircle size={16} />
          <p>{error}</p>
        </div>
      )}

      {tarifas.length > 0 && (
        <div className="grid grid-cols-1 gap-3 mt-4">
          {tarifas.map((tarifa) => (
            <div
              key={tarifa.id}
              onClick={() => seleccionarTarifa(tarifa)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all flex justify-between items-center ${
                tarifaSeleccionada === tarifa.id
                  ? "border-emerald-600 bg-emerald-50/50"
                  : "border-zinc-200 hover:border-emerald-300 bg-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-zinc-100 p-2 rounded-full">
                  <Truck size={20} className="text-zinc-600" />
                </div>
                <div>
                  <p className="font-bold text-zinc-800">{tarifa.carrier_name}</p>
                  <p className="text-xs text-zinc-500">Entrega estimada: {tarifa.delivery_type || "Estándar"}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-lg text-emerald-700">
                  {formatterCOP.format(parseFloat(tarifa.total_pricing) || 0)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}