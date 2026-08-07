import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-slate-50 pt-4 pb-6 px-4 space-y-4 text-center max-w-md mx-auto">
      {/* 1. BADGE DE PRUEBA SOCIAL / ESCASEZ */}
      <div className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-700 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
        <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
        <span>¡Quedan pocas unidades en bodega!</span>
      </div>

      {/* 2. TÍTULO GANADOR (Problema + Solución) */}
      <h1 className="text-2xl font-black tracking-tight leading-snug text-slate-900">
        ¡Mantén todo organizado en segundos sin hacer huecos en la pared!
      </h1>

      {/* 3. IMAGEN PRINCIPAL / GIF DEL PRODUCTO */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border-2 border-slate-200 shadow-xl">
        <Image
          src="/banner.png" // 👈 Asegúrate de tener esta imagen en public/images/producto.jpg
          alt="Producto Ganador Randiway"
          fill
          priority
          className="object-cover"
        />
        {/* Badge flotante sobre la foto */}
        <div className="absolute top-3 right-3 bg-red-600 text-white font-black text-xs px-2.5 py-1 rounded-lg shadow-md uppercase">
          -40% OFF
        </div>
      </div>

      {/* 4. PRECIOS Y OFERTA CLARA */}
      <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-around">
        <div className="text-left">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Precio Normal</p>
          <p className="text-base font-bold text-slate-400 line-through">$35.00</p>
        </div>
        <div className="h-8 w-[1px] bg-slate-200" />
        <div className="text-left">
          <p className="text-[10px] font-extrabold text-red-600 uppercase tracking-wider">Oferta Especial</p>
          <p className="text-3xl font-black text-red-600">$21.00</p>
        </div>
      </div>

      {/* 5. VIÑETAS DE BENEFICIOS RÁPIDOS */}
      <ul className="text-left text-xs font-bold text-slate-700 space-y-2 bg-white/60 p-3 rounded-xl border border-slate-100">
        <li className="flex items-center gap-2">
          <span className="text-emerald-500 text-sm">✓</span> Instalación fácil sin taladro ni herramientas
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-500 text-sm">✓</span> Resistente al agua y soporta alto peso
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-500 text-sm">✓</span> Pago 100% en efectivo al recibir en tu casa
        </li>
      </ul>

      {/* 6. BOTÓN CTA PRINCIPAL */}
      <div className="pt-1">
        <a
          href="#checkout"
          className="block w-full bg-red-600 hover:bg-red-700 active:scale-95 text-white font-black text-base py-3.5 px-4 rounded-xl shadow-lg shadow-red-600/30 transition-all uppercase tracking-wide text-center"
        >
          🛒 Pedir Ahora y Pagar en Casa
        </a>
        <p className="text-[10px] text-slate-400 font-bold mt-2">
          🔒 Tu pedido está protegido. No pagas nada por adelantado.
        </p>
      </div>
    </section>
  );
}