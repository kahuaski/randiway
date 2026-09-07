"use client";
import  { useState, useRef, useEffect } from "react";

export interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string | number | undefined;
  onChange: (value: string | number) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export function SelectList({
  options,
  value,
  onChange,
  placeholder = "Seleccionar opción...",
  error,
  disabled = false,
  isLoading = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (

      <div className="relative w-full p-1 border-none">
        <button
          type="button"
          disabled={disabled || isLoading}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-3 py-2 text-sm text-left border rounded-xl outline-none transition-colors flex justify-between items-center bg-white ${
            disabled ? "opacity-60 cursor-not-allowed bg-zinc-50" : "cursor-pointer"
          } ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-zinc-200 hover:border-emerald-700 focus:border-emerald-800"
          }`}
        >
          <span className={selectedOption ? "text-zinc-900" : "text-zinc-400"}>
            {isLoading ? "Cargando..." : selectedOption?.label || placeholder}
          </span>

          <svg
            className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && !disabled && !isLoading && (
          <ul className="absolute z-50 w-full mt-1 bg-white border border-zinc-200 rounded-lg shadow-xl max-h-60 overflow-y-auto py-1">
            {options.length === 0 ? (
              <li className="px-4 py-3 text-sm text-zinc-500 text-center">
                No hay opciones disponibles
              </li>
            ) : (
              options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                    value === option.value
                      ? "bg-emerald-50 text-emerald-800 font-semibold"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        )}
    
      
      {error && <span className="text-sm text-red-600 mt-1.5">{error}</span>}
    </div>
  );
}