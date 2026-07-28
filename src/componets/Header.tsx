import Image from 'next/image';

export default function Header() {
 return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-100">
      {/* Cintillo de Oferta */}
      <div className="bg-red-600 text-white text-xs font-black py-1.5 px-4 text-center uppercase tracking-wider animate-pulse">
        ⚡ ÚLTIMAS UNIDADES DISPONIBLES CON DESCUENTO
      </div>

      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between">
        <span className="text-xl font-black text-slate-900">
          Randiway<span className="text-red-500">.ec</span>
        </span>

        <a
          href="#checkout"
          className="bg-red-500 hover:bg-red-600 active:scale-95 text-white font-extrabold text-xs px-3.5 py-2 rounded-lg shadow-md uppercase tracking-wider transition-all"
        >
          ¡Aprovechar Oferta!
        </a>
      </div>
    </header>
  );
}