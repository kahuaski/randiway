"use client";

import { useCartStore } from '@/store/useCartStore'; // Ajusta la ruta
import Image from 'next/image';
import { FaTimes, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeFromCart, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Evitar error de hidratación en Next.js (el server no tiene localStorage)
  useEffect(() => {
    return () => setMounted(true);
  }, []);

  if (!mounted) return null;

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Fondo oscuro detrás del carrito */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Panel lateral derecho */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cabecera del Carrito */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-xl font-black text-gray-900">Tu Carrito ({items.length})</h2>
          <button 
            onClick={closeCart}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Lista de Productos */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
              <span className="text-4xl">🛒</span>
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 border border-gray-100 p-3 rounded-xl">
                <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <h3 className="font-bold text-sm text-gray-900 line-clamp-1">{item.name}</h3>
                  <p className="text-sm text-gray-500">Cant: {item.quantity}</p>
                  <p className="font-black text-emerald-600">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 p-2"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer del Carrito (Total y Botones) */}
        {items.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 font-medium">Total estimado</span>
              <span className="text-2xl font-black text-gray-900">${total.toFixed(2)}</span>
            </div>
           

<Link 
  href="/pay" 
  onClick={closeCart} 
  className="w-full flex items-center justify-center bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors"
>
  Proceder al Pago
</Link>
            <button 
              onClick={clearCart}
              className="w-full text-sm font-medium text-gray-500 hover:text-gray-900 py-3 mt-2"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}