import Image from 'next/image';

export default function HeroCategories() {
  // Array de tus categorías principales
  const categories = [
    { id: 1, title: "JEANS", href: "/categorias/jeans" },
    { id: 2, title: "BLUSAS", href: "/categorias/blusas" },
    { id: 3, title: "CAMISETAS", href: "/categorias/camisetas" },
    { id: 4, title: "SHORTS", href: "/categorias/shorts" },
  ];

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO PRINCIPAL */}
      <Image
        src="/moda1.png" // 👈 Tu imagen de portada de la tienda
        alt="Nueva Colección RandiWay"
        fill
        priority
        className="object-cover object-center"
      />

      {/* OVERLAY OSCURO (Para que resalten los botones) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 2. TEXTO CENTRAL SUPERPUESTO */}
      <div className="absolute top-1/4 md:top-1/3 flex flex-col items-center text-white text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter drop-shadow-lg leading-none">
          <span className="block text-2xl md:text-3xl font-medium tracking-normal mb-[-10px]">
            nueva colección
          </span>
          RandiWay
        </h1>
      </div>

      {/* 3. FILA DE BOTONES DE CATEGORÍAS */}
      <div className="absolute bottom-10 w-full z-10">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Contenedor Flex: En móviles hace scroll, en PC se centra */}
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-6 pb-4 justify-start md:justify-center">
            
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={cat.href}
                className="group relative flex flex-col items-center justify-center min-w-[120px] w-[120px] md:min-w-[150px] md:w-[150px] h-[160px] md:h-[200px] snap-center rounded-3xl border-[1.5px] border-white/60 bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:-translate-y-2"
              >
                {/* Texto de la categoría */}
                <span className="text-sm md:text-lg text-white font-black tracking-widest text-center uppercase">
                  {cat.title}
                </span>
                
                {/* Pequeña línea decorativa que aparece al hacer hover */}
                <span className="absolute bottom-6 w-8 h-[2px] bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
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