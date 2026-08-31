import Image from 'next/image';
import Link from 'next/link';
import { categories } from '../utils/Categories';

export default function HeroCategories() {
  // Datos de prueba para el carrusel inferior
  const storeProducts = [
    { id: 1, name: "Jeans Push Up", store: "Medellín", price: "$35.00", img: "/jeans.png" },
    { id: 2, name: "Blusa de Seda", store: "Bogotá", price: "$28.00", img: "/jeans.png" },
    { id: 3, name: "Short Denim", store: "Bucaramanga", price: "$22.00", img: "/jeans.png" },
    { id: 4, name: "Camiseta Basic", store: "Medellín", price: "$15.00", img: "/jeans.png" },
    { id: 5, name: "Jeans Cargo", store: "Bogotá", price: "$40.00", img: "/jeans.png" },
  ];

  // Duplicamos el arreglo para crear la ilusión de un bucle infinito sin cortes
  const carouselItems = [...storeProducts, ...storeProducts];

  return (
    <section className="relative w-full h-[75vh] md:h-[80vh] min-h-[450px] max-h-[750px] flex items-center justify-center overflow-hidden">
      <Image
        src="/moda1.png" 
        alt="Nueva Colección RandiWay"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-1/4 md:top-1/3 flex flex-col items-center text-white text-center z-10 px-4 w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter drop-shadow-xl leading-none">
          <span className="block text-2xl md:text-3xl font-medium tracking-normal mb-1 opacity-90">
            nueva colección
          </span>
          RandiWay
        </h1>
        <p className="mt-4 text-sm md:text-base text-white/90 max-w-sm drop-shadow-md">
        </p>
      </div>

      <div className="absolute bottom-24 md:bottom-28 w-full z-10">
        <div className="max-w-5xl mx-auto px-0 md:px-4 relative">
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/30 to-transparent pointer-events-none md:hidden z-20" />
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 pb-4 pt-2 px-4 md:px-2 justify-start md:justify-center">
            
            {categories.map((cat) => {
              const IconComponent = cat.icon;

              return (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="group relative flex flex-col items-center justify-center min-w-[120px] w-[120px] md:min-w-[160px] md:w-[160px] h-[150px] md:h-[200px] snap-center rounded-2xl border border-white/40 bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-2 shadow-lg"
                >
                  <span className="text-sm md:text-lg text-white font-bold tracking-[0.2em] text-center uppercase drop-shadow-md">
                    {cat.title}
                  </span>
                  <span className="text-2xl text-white/80 mt-2"> 
                    <IconComponent /> 
                  </span>
                  <span className="absolute bottom-6 w-8 h-[2px] bg-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* NUEVO CARRUSEL INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full h-[70px] bg-black/60 backdrop-blur-sm border-t border-white/10 z-20 overflow-hidden flex items-center">
        {/* Contenedor con la animación */}
        <div className="flex w-max animate-marquee hover:pause hover:cursor-pointer">
          {carouselItems.map((product, index) => (
            <div 
              key={`${product.id}-${index}`} 
              className="flex items-center gap-3 px-6 border-r border-white/10"
            >
              <div className="relative w-10 h-10 rounded-md overflow-hidden bg-white/20 shrink-0">
                <Image 
                  src={product.img} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white text-xs font-bold leading-tight">
                  {product.name}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-[10px] font-black">{product.price}</span>
                  <span className="text-white/50 text-[9px] uppercase tracking-wider">{product.store}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          /* Animación del carrusel infinito */
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          /* Pausar al pasar el mouse */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
}