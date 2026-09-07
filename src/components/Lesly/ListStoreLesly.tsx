"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { SelectList } from "../SelectList";
import { LabelText } from "../LabelText";
import colombiaData from "@/data/colombia.json";
import { Control } from "child_process";

export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category?: string;
}



interface ProductCardProps {
  product: Product;
}

export default function ListStorelesly({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedDepartamento, setSelectedDepartamento] = useState<number | undefined>();
  const [selectedCiudad, setSelectedCiudad] = useState<string | undefined>();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const departamentoOptions = colombiaData.map((d) => ({
    value: d.id,
    label: d.departamento,
  }));

  const selectedDept = colombiaData.find((d) => d.id === selectedDepartamento);
  const ciudadOptions = selectedDept
    ? selectedDept.ciudades.map((c) => ({ value: c.nombre, label: c.nombre }))
    : [];

  const handleDepartamentoChange = (value: string | number) => {
    setSelectedDepartamento(value as number);
    setSelectedCiudad(undefined);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
    

      <Link
        href={`/producto/${product.id}`}
        className="relative aspect-4/5 w-full overflow-hidden bg-gray-50"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {product.category && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm uppercase tracking-wider">
            {product.category}
          </span>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-4 md:p-5">
        <Link href={`/producto/${product.id}`} className="block">
          <h3 className="font-bold text-gray-900 text-lg line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-black text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white p-3 rounded-xl transition-colors duration-300 active:scale-95"
            aria-label="Agregar al carrito"
          >
            <FaCartPlus className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
