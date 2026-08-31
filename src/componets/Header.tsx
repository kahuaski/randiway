"use client";

import  { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Heart, ShoppingCart, Menu, X, User, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const categories = ['Mujer', 'Hombre', 'Nueva Colección', 'Básicos', 'Accesorios'];

  return (
    <header className="w-full bg-white font-sans tracking-wide relative z-50">

      <div className="border-b border-stone-200">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-24 gap-4">
            <div className="flex items-center gap-3 md:gap-0">
              <button 
                className="md:hidden p-1 -ml-1 text-zinc-900 hover:text-emerald-700 transition-colors"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Abrir menú"
              >
                <Menu size={26} strokeWidth={1.5} />
              </button>
              
              <Link href="/" className="inline-flex items-center text-zinc-900 text-2xl md:text-4xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity">
                RandiWay<span className="text-emerald-700 ml-0.5">.</span>
              </Link>
            </div>
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="flex w-full border border-stone-300 bg-stone-50 rounded-full overflow-hidden focus-within:border-emerald-700 focus-within:ring-1 focus-within:ring-emerald-700 transition-all shadow-sm">
                <input 
                  type="text" 
                  placeholder="Buscar colecciones, prendas, accesorios..." 
                  className="w-full px-6 py-2.5 bg-transparent outline-none text-sm text-stone-700 placeholder-stone-400"
                />
                <button className="bg-emerald-800 text-white px-6 flex items-center justify-center hover:bg-emerald-900 transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-8">

              <button className="hidden lg:flex items-center gap-1 hover:text-emerald-800 transition-colors text-left group">
                <div className="text-[12px] text-stone-600 group-hover:text-emerald-800 transition-colors">
                  <p className="leading-tight">Mi cuenta</p>
                  <p className="font-semibold text-zinc-900 group-hover:text-emerald-800 leading-tight flex items-center gap-1">
                    Ingresar <ChevronDown size={14} strokeWidth={2} />
                  </p>
                </div>
              </button>

              <div className="flex items-center gap-4 md:gap-5 text-zinc-800">

                <Link href="/favoritos" className="hidden md:block hover:text-emerald-700 transition-colors">
                  <Heart size={24} strokeWidth={1.5} />
                </Link>

                <Link href="/carrito" className="hover:text-emerald-700 transition-colors relative p-1 md:p-0">
                  <ShoppingCart size={24} strokeWidth={1.5} />
                  <span className="absolute -top-0.5 -right-1 md:-top-1.5 md:-right-2 bg-emerald-800 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full border-2 border-white">
                    2
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="md:hidden border-b border-stone-200 bg-white px-4 py-3">
        <div className="flex w-full border border-stone-300 bg-stone-50 rounded-full overflow-hidden focus-within:border-emerald-700 focus-within:ring-1 focus-within:ring-emerald-700 transition-all">
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            className="w-full px-4 py-2 bg-transparent outline-none text-[15px] text-stone-700 placeholder-stone-400"
          />
          <button className="bg-emerald-800 text-white px-4 flex items-center justify-center hover:bg-emerald-900">
            <Search size={18} />
          </button>
        </div>
      </div>

   

      <div 
        className={`fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}>

        <div className="flex items-center justify-between p-4 border-b border-stone-100 bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
              <User size={20} />
            </div>
            <div>
              <p className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Bienvenido</p>
              <Link href="/login" className="text-zinc-900 font-bold text-sm hover:text-emerald-700" onClick={() => setIsMenuOpen(false)}>
                Ingresa a tu cuenta
              </Link>
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-stone-400 hover:text-zinc-900 bg-white rounded-full shadow-sm">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          <Link href="/ofertas" className="flex items-center justify-between px-5 py-4 text-emerald-700 font-bold text-sm tracking-wide border-b border-stone-50" onClick={() => setIsMenuOpen(false)}>
            <ChevronRight size={16} className="opacity-50" />
          </Link>

        </div>

        <div className="p-4 border-t border-stone-100 bg-stone-50 space-y-3">
          <Link href="/favoritos" className="flex items-center gap-3 text-zinc-700 font-medium text-sm p-2 hover:text-emerald-700" onClick={() => setIsMenuOpen(false)}>
            <Heart size={20} className="text-stone-400" />
            Mis Favoritos
          </Link>
        </div>
      </div>

    </header>
  );
}