import Link from 'next/link';
import Image from 'next/image';

export interface Store {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  href: string;
}

interface BentoStoresProps {
  stores: Store[];
}

export default function Stores({ stores }: BentoStoresProps) {
  if (!stores || stores.length === 0) return null;

  const getBentoSpan = (index: number, total: number) => {
    if (total === 1) return 'md:col-span-4 md:row-span-2 min-h-[400px]';
    if (total === 2) return 'md:col-span-2 md:row-span-2 min-h-[350px]';
    if (index === 0) return 'md:col-span-2 md:row-span-2 min-h-[400px]';
    if (index === 1 || index === 2) return 'md:col-span-1 md:row-span-1 min-h-[200px]';
    if (index === 3) return 'md:col-span-2 md:row-span-1 min-h-[200px]';
    return 'md:col-span-1 md:row-span-1 min-h-[200px]';
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
    
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
        {stores.map((store, index) => (
          <Link
            key={store.id}
            href={store.href}
            className={`
              group relative overflow-hidden rounded-2xl bg-gray-100 
              transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl
              ${getBentoSpan(index, stores.length)}
            `}
          >
            <Image
              src={store.imageUrl}
              alt={store.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
              <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">
                {store.name}
              </h3>
              <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2">
                {store.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}