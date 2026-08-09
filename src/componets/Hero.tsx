import Image from 'next/image';
import Link from 'next/link';

export default function HeroCategories() {
  // Array de tus categorías principales
  const categories = [
    { id: 1, title: "JEANS", href: "/categoria/jeans" },
    { id: 2, title: "BLUSAS", href: "/categoria/blusas" },
    { id: 3, title: "CAMISETAS", href: "/categoria/camisetas" },
    { id: 4, title: "SHORTS", href: "/categoria/shorts" },
  ];

  return (
    <section className="relative w-full h-[75vh] md:h-[80vh] min-h-[450px] max-h-[750px] flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO PRINCIPAL */}
      <Image
        src="/moda1.png" // 👈 Tu imagen de portada de la tienda
        alt="Nueva Colección RandiWay"
        fill
        priority
        className="object-cover object-center"
      />

      {/* OVERLAY OSCURO (Para contraste perfecto del texto) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 2. TEXTO CENTRAL SUPERPUESTO */}
      <div className="absolute top-1/4 md:top-1/3 flex flex-col items-center text-white text-center z-10 px-4 w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter drop-shadow-xl leading-none">
          <span className="block text-2xl md:text-3xl font-medium tracking-normal mb-1 opacity-90">
            nueva colección
          </span>
          RandiWay
        </h1>
        <p className="mt-4 text-sm md:text-base text-white/90 max-w-sm drop-shadow-md">
          Descubre las últimas tendencias para esta temporada.
        </p>
      </div>

      {/* 3. FILA DE BOTONES DE CATEGORÍAS */}
      <div className="absolute bottom-6 md:bottom-10 w-full z-10">
        <div className="max-w-5xl mx-auto px-0 md:px-4 relative">
          
          {/* Degradado lateral (Solo móvil) para indicar que hay scroll */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/30 to-transparent pointer-events-none md:hidden z-20" />

          {/* Contenedor Flex */}
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 pb-4 pt-2 px-4 md:px-2 justify-start md:justify-center">
            
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative flex flex-col items-center justify-center min-w-[120px] w-[120px] md:min-w-[160px] md:w-[160px] h-[150px] md:h-[200px] snap-center rounded-2xl border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-2 shadow-lg"
              >
                {/* Texto de la categoría */}
                <span className="text-sm md:text-lg text-white font-bold tracking-[0.2em] text-center uppercase drop-shadow-md">
                  {cat.title}
                </span>
                
                {/* Pequeña línea decorativa (Alineada con el color de tu marca) */}
                <span className="absolute bottom-6 w-8 h-[2px] bg-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* ESTILO PARA OCULTAR LA BARRA DE SCROLL EN MÓVILES */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
    </section>
  );
}