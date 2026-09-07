import { NextResponse } from "next/server";
import { getOrigen } from "@/config/origenes";

interface Parcela {
  length: number;
  width: number;
  height: number;
  weight: number;
  declared_amount: number;
}

interface CuerpoCotizacion {
  originId?: string;
  address_to?: Record<string, unknown>;
  parcels?: Parcela[];
}

export async function POST(request: Request) {
  try {
    const body: CuerpoCotizacion = await request.json();

    const origen = getOrigen(body.originId);
    if (!origen) {
      return NextResponse.json(
        { error: { message: `No existe el origen '${body.originId}' en las variables de entorno.` } },
        { status: 400 }
      );
    }

    const payload = {
      quotation: {
        address_from: {
          country_code: "CO",
          postal_code: origen.codigoPostal,
          area_level1: origen.departamento,
          area_level2: origen.municipio,
          tax_id_number: origen.nit,
        },
        address_to: body.address_to || {},
        parcels: body.parcels || [
          {
            length: 30,
            width: 20,
            height: 15,
            weight: 3,
            declared_amount: 50000,
          },
        ],
      },
    };

    const response = await fetch("https://api-pro.skydropx.com/api/v1/quotations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.SKYDROPX_API_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}