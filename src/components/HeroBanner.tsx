import Image from 'next/image';
import Link from 'next/link';
import type { ElementType } from 'react';

// Definimos la estructura de cada categoría
export interface HeroCategory {
  id: string | number;
  title: string;
  href: string;
  icon: ElementType; 
}

export interface DynamicHeroProps {
  backgroundImage: string;
  imageAlt?: string;
  preTitle?: string;
  title: string;
  description?: string;
  categories: HeroCategory[];
}

export default function HeroBanner({
  backgroundImage,
  imageAlt = 'Hero Image',
  preTitle,
  title,
  description,
  categories,
}: DynamicHeroProps) {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={backgroundImage}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenedor de Textos Principales */}
      <div className="absolute top-1/8 md:top-1/6 flex flex-col items-center text-white text-center z-10 px-4 w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter drop-shadow-xl leading-none">
          {preTitle && (
            <span className="block text-2xl md:text-3xl font-medium tracking-normal mb-1 opacity-90">
              {preTitle}
            </span>
          )}
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-sm md:text-base text-white/90 max-w-sm drop-shadow-md">
            {description}
          </p>
        )}
      </div>

      {/* Contenedor de Categorías (Bento/Cards) */}
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
    </section>
  );
}