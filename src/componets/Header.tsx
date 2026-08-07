import React from 'react';
import { Search, MapPin, ChevronDown, Heart, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-stone-200 font-sans tracking-wide">
      {/* --- SECCIÓN SUPERIOR --- */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 gap-4">
          
          {/* Logo RandiWay (Estilo Boutique) */}
          <div className="flex-shrink-0">
            <a href="/" className="inline-flex items-center text-zinc-900 text-3xl md:text-4xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity">
              RandiWay<span className="text-emerald-700 ml-0.5">.</span>
            </a>
          </div>

          {/* Barra de Búsqueda (Estilo Moderno/Redondeado) */}
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

          {/* Acciones de Usuario (Ubicación, Login, Íconos) */}
          <div className="flex items-center gap-6 md:gap-8">
            
            {/* Selector de Ubicación */}
            <button className="hidden lg:flex items-center gap-2 group">
              <MapPin className="text-emerald-700 group-hover:scale-110 transition-transform" size={24} strokeWidth={1.5} />
              <div className="text-left text-[12px] text-stone-600">
                <p className="leading-tight">Enviar a</p>
                <p className="font-semibold text-zinc-900 underline decoration-stone-300 underline-offset-4 group-hover:decoration-emerald-700 transition-colors">
                  Bogotá, Colombia
                </p>
              </div>
            </button>

            {/* Login / Registro */}
            <button className="hidden lg:flex items-center gap-1 hover:text-emerald-800 transition-colors text-left group">
              <div className="text-[12px] text-stone-600 group-hover:text-emerald-800 transition-colors">
                <p className="leading-tight">Mi cuenta</p>
                <p className="font-semibold text-zinc-900 group-hover:text-emerald-800 leading-tight flex items-center gap-1">
                  Ingresar <ChevronDown size={14} strokeWidth={2} />
                </p>
              </div>
            </button>

            {/* Íconos Wishlist y Carrito */}
            <div className="flex items-center gap-5 text-zinc-800">
              <button className="hover:text-emerald-700 transition-colors">
                <Heart size={24} strokeWidth={1.5} />
              </button>
              <button className="hover:text-emerald-700 transition-colors relative">
                <ShoppingCart size={24} strokeWidth={1.5} />
                {/* Indicador de items en el carrito (Premium style) */}
                <span className="absolute -top-1.5 -right-2 bg-emerald-800 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full border-2 border-white">
                  2
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* --- SECCIÓN INFERIOR (Barra de Navegación Minimalista) --- */}
      <nav className="border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto flex justify-center overflow-x-auto scrollbar-hide">
          <ul className="flex items-center text-[11px] md:text-[12px] font-semibold tracking-[0.15em] text-stone-500 uppercase">
            <li>
              <a href="/ofertas" className="block px-5 py-4 md:px-8 text-emerald-800 font-bold whitespace-nowrap hover:text-emerald-600 transition-colors">
                EXCLUSIVAS
              </a>
            </li>
            {['Mujer', 'Hombre', 'Nueva Colección', 'Básicos', 'Accesorios'].map((item) => (
              <li key={item}>
                <a href={`/categoria/${item.toLowerCase().replace(' ', '-')}`} className="block px-5 py-4 md:px-8 whitespace-nowrap hover:text-zinc-900 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}