"use client";

import Header from '@/componets/Header';
import SelectGeography from '@/componets/SelectGeography';
import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
  

        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-3xl font-black text-gray-900 mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Parece que aún no has agregado productos a tu carrito. Explora nuestra colección y encuentra tu nuevo estilo.
        </p>
        <Link 
          href="/" 
          className="bg-gray-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-emerald-600 transition-colors"
        >
          Explorar RandiWay
        </Link>
      </div>
    );
  }
  return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <Header />
        <SelectGeography/>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Carrito de Compras</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">

          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="hidden sm:grid sm:grid-cols-12 gap-4 p-6 border-b border-gray-100 bg-gray-50/50 text-sm font-bold text-gray-500 uppercase tracking-wider">
                <div className="col-span-6">Producto</div>
                <div className="col-span-2 text-center">Precio</div>
                <div className="col-span-2 text-center">Cantidad</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              <div className="divide-y divide-gray-100">
                {items.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center">
                    <div className="col-span-6 flex items-center gap-4 w-full">
                      <div className="relative w-24 h-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                        <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 line-clamp-2">{item.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-600 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
                        >
                          <FaTrash size={12} /> Eliminar
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 text-center w-full sm:w-auto mt-4 sm:mt-0 flex justify-between sm:block">
                      <span className="sm:hidden text-gray-500 text-sm font-medium">Precio:</span>
                      <span className="font-medium text-gray-900">${item.price.toFixed(2)}</span>
                    </div>
                    <div className="col-span-2 flex justify-center w-full sm:w-auto mt-4 sm:mt-0">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-50 transition-colors rounded-l-lg"
                        >
                          <FaMinus size={10} />
                        </button>
                        <span className="w-10 text-center font-medium text-gray-900 text-sm">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-r-lg"
                        >
                          <FaPlus size={10} />
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 text-right w-full sm:w-auto mt-4 sm:mt-0 flex justify-between sm:block">
                      <span className="sm:hidden text-gray-500 text-sm font-medium">Subtotal:</span>
                      <span className="font-black text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  ← Seguir comprando
                </Link>
                <button 
                  onClick={clearCart}
                  className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} productos)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío</span>
                  <span className="text-sm text-gray-500 italic">Calculado en el pago</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-gray-900">Total Estimado</span>
                  <span className="text-3xl font-black text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">Impuestos incluidos si aplican</p>
              </div>

              <Link 
                href="/pago"
                className="w-full flex items-center justify-center bg-gray-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-emerald-600 transition-colors active:scale-[0.98]"
              >
                Proceder al Pago
              </Link>
              <div className="mt-6 flex justify-center gap-4 opacity-50 grayscale">
                <span className="text-2xl">🔒</span>
                <span className="text-2xl">💳</span>
                <span className="text-2xl">📦</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}