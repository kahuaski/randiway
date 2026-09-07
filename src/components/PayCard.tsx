"use client";

import { useCartStore, rehydrateCart } from '@/store/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SelectList } from './SelectList';
import { LabelText } from './LabelText';
import colombiaData from '@/data/colombia.json';
import { ShippingQuoter } from './shipping/ShippingQuoter';

const formatterCOP = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

export default function PayCard() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const hydrated = useCartStore((s) => s.hydrated);
  const clearCart = useCartStore((s) => s.clearCart);
  const [isProcessing, setIsProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedDepartamento, setSelectedDepartamento] = useState<number | undefined>();
  const [selectedMunicipio, setSelectedMunicipio] = useState<string | undefined>();
  const [envioPrecio, setEnvioPrecio] = useState(0);

  useEffect(() => {
    setMounted(true);
    rehydrateCart();
  }, []);

  useEffect(() => {
    if (!hydrated || !mounted) return;
    if (items.length === 0) {
      router.push('/');
    }
  }, [items.length, hydrated, mounted, router]);

  if (!hydrated || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Cargando tu pedido...</p>
      </div>
    );
  }
  if (items.length === 0) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const departamentoOptions = colombiaData.map((d) => ({
    value: d.id,
    label: d.departamento,
  }));

  const selectedDept = colombiaData.find((d) => d.id === selectedDepartamento);
  const municipioOptions = selectedDept
    ? selectedDept.ciudades.map((c) => ({ value: c.nombre, label: c.nombre }))
    : [];

  const cabeceraItem = items[0];
  const originId = cabeceraItem?.originId || 'bogota';

  const codigoPostalDestino = selectedDept
    ? selectedDept.ciudades.find((c) => c.nombre === selectedMunicipio)?.codigo
    : undefined;

  const addressTo = {
    area_level1: selectedDept?.departamento,
    area_level2: selectedMunicipio,
    tax_id_number: '900654321-5',
  };

  const handleDepartamentoChange = (value: string | number) => {
    setSelectedDepartamento(value as number);
    setSelectedMunicipio(undefined);
  }; 

  const handleSeleccionTarifa = (id: string, precio: number) => {
    setEnvioPrecio(precio);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      alert('¡Pago procesado con éxito! Gracias por tu compra en RandiWay.');
      clearCart();
      router.push('/'); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">

        <div className="lg:col-span-7">
          <h1 className="text-3xl font-black text-gray-900 mb-8">Completar Pedido</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Datos de Envío</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" id="nombre" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                  <input type="text" id="apellido" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-2">Dirección Completa</label>
                  <input type="text" id="direccion" required placeholder="Calle, número, apartamento..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="sm:col-span-2">
                  <LabelText text="Departamento" required />
                  <SelectList
                    options={departamentoOptions}
                    value={selectedDepartamento}
                    onChange={handleDepartamentoChange}
                    placeholder="Seleccionar departamento..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <LabelText text="Municipio / Ciudad" required />
                  <SelectList
                    options={municipioOptions}
                    value={selectedMunicipio}
                    onChange={(value) => setSelectedMunicipio(value as string)}
                    placeholder={selectedDepartamento !== undefined ? "Seleccionar municipio o ciudad..." : "Primero seleccione un departamento"}
                    disabled={selectedDepartamento === undefined}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">Teléfono Celular</label>
                  <input type="tel" id="telefono" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <ShippingQuoter
                originId={originId}
                codigoPostalDestino={codigoPostalDestino || ''}
                addressTo={addressTo}
                onSelectRate={handleSeleccionTarifa}
              />
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Método de Pago</h2>
              <div className="space-y-4">
                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <input type="radio" name="pago" value="tarjeta" defaultChecked className="w-5 h-5 text-gray-900 focus:ring-gray-900" />
                  <span className="ml-3 font-medium text-gray-900">Tarjeta de Crédito / Débito</span>
                </label>
                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <input type="radio" name="pago" value="transferencia" className="w-5 h-5 text-gray-900 focus:ring-gray-900" />
                  <span className="ml-3 font-medium text-gray-900">Transferencia Bancaria</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full bg-gray-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-emerald-600 transition-all active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Procesando...' : `Pagar ${formatterCOP.format(subtotal * 4000 + envioPrecio)}`}
            </button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen de tu Orden</h2>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                    <Image src={item.imageUrl} alt={item.name} fill sizes="64px" className="object-cover" />
                    <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <span className="font-bold text-gray-900">
                    {formatterCOP.format(item.price * item.quantity * 4000)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">{formatterCOP.format(subtotal * 4000)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Envío</span>
                <span className="font-medium">
                  {envioPrecio > 0
                    ? formatterCOP.format(envioPrecio)
                    : 'Selecciona una tarifa'}
                </span>
              </div>
              <div className="flex justify-between text-2xl font-black text-gray-900 border-t border-gray-100 pt-4">
                <span>Total a Pagar</span>
                <span className="text-emerald-600">
                  {formatterCOP.format(subtotal * 4000 + envioPrecio)}
                </span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors">
                ← Volver a la tienda
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}