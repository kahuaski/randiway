export interface AddressInfo {
  country_code?: string;
  postal_code?: string;
  area_level1?: string;
  area_level2?: string;
  tax_id_number?: string;
}

interface Parcela {
  length: number;
  width: number;
  height: number;
  weight: number;
  declared_amount: number;
}

export const shippingService = {
  crearCotizacion: async (originId: string, addressTo: AddressInfo, parcels?: Parcela[]) => {
    const payload = {
      originId,
      address_to: {
        country_code: "CO",
        ...addressTo,
      },
      parcels: parcels || [
        {
          length: 30,
          width: 20,
          height: 15,
          weight: 3,
          declared_amount: 50000,
        },
      ],
    };

    const res = await fetch("/api/shipping/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error?.message || "Error al crear cotización en Skydropx");
    }

    return await res.json();
  },
};