"use client";
import { useState } from 'react';
// Importamos el JSON directamente (Next.js lo empaquetará de forma eficiente)
import colombiaData from '@/data/colombia.json'; 

export default function SelectGeography() {
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("");

  // Buscamos las ciudades correspondientes al departamento seleccionado
  const departamentoSeleccionado = colombiaData.find(d => d.departamento === departamento);
  const ciudadesDisponibles = departamentoSeleccionado ? departamentoSeleccionado.ciudades : [];

  return (
    <div className="flex gap-4">
      {/* Selector de Departamento */}
      <select 
        value={departamento} 
        onChange={(e) => {
          setDepartamento(e.target.value);
          setCiudad(""); // Reseteamos la ciudad al cambiar de departamento
        }}
        className="border p-2 rounded"
      >
        <option value="">Selecciona un Departamento</option>
        {colombiaData.map((item) => (
          <option key={item.departamento} value={item.departamento}>
            {item.departamento}
          </option>
        ))}
      </select>

      {/* Selector de Ciudad */}
      <select 
        value={ciudad} 
        onChange={(e) => setCiudad(e.target.value)}
        disabled={!departamento}
        className="border p-2 rounded disabled:bg-gray-100 disabled:text-gray-400"
      >
        <option value="">Selecciona una Ciudad</option>
        {ciudadesDisponibles.map((nombreCiudad) => (
          <option key={nombreCiudad} value={nombreCiudad}>
            {nombreCiudad}
          </option>
        ))}
      </select>
    </div>
  );
}