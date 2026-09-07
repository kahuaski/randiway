import 'server-only';

export interface OrigenInfo {
  originId: string;
  departamento: string;
  municipio: string;
  codigoPostal: string;
  nit: string;
}

const readOrigen = (originId: string): OrigenInfo => {
  const key = originId.toUpperCase();
  const get = (suffix: string) => process.env[`ORIGEN_${key}_${suffix}`];

  return {
    originId,
    departamento: get("DEPARTAMENTO") || "",
    municipio: get("MUNICIPIO") || "",
    codigoPostal: get("CODIGO_POSTAL") || "",
    nit: get("NIT") || "",
  };
};

const LISTA_DE_ORIGENES: string[] = [];

for (const envKey of Object.keys(process.env)) {
  const match = envKey.match(/^ORIGEN_([A-Z0-9]+)_DEPARTAMENTO$/);
  if (match) LISTA_DE_ORIGENES.push(match[1].toLowerCase());
}

export const LISTA_ORIGENES: OrigenInfo[] = LISTA_DE_ORIGENES.map(readOrigen);

export function getOrigen(originId?: string): OrigenInfo | undefined {
  if (!originId) return undefined;
  return LISTA_ORIGENES.find((o) => o.originId === originId.toLowerCase());
}