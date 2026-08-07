import React from 'react';
import { 
  ShieldCheck,
  Lock,
  CreditCard,
  Smartphone
} from 'lucide-react';

import { 
  FaInstagram, 
  FaTwitter, 
  FaFacebook, 
  FaYoutube 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-10 pb-6 px-4 md:px-8 font-sans text-slate-600">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 1. SECCIÓN NEWSLETTER */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 pb-8">
          <h3 className="text-lg text-slate-500 font-medium tracking-wide">
            ¡Suscríbete al Newsletter! y recibe descuentos increíbles
          </h3>
          <div className="flex flex-col w-full xl:w-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="border border-slate-300 px-4 py-2 w-full sm:w-72 focus:outline-none focus:border-slate-500 text-sm"
              />
              <div className="flex gap-2">
                <button className="bg-[#4A4A4A] hover:bg-black text-white px-6 py-2 text-sm font-bold transition-colors w-full sm:w-auto">
                  Soy Mujer
                </button>
                <button className="bg-[#4A4A4A] hover:bg-black text-white px-6 py-2 text-sm font-bold transition-colors w-full sm:w-auto">
                  Soy Hombre
                </button>
              </div>
            </div>
            <label className="flex items-start sm:items-center gap-2 mt-3 text-[11px] text-slate-500 cursor-pointer">
              <input type="checkbox" className="mt-0.5 sm:mt-0" />
              <span>
                Acepta <a href="#" className="underline hover:text-slate-800">Términos y condiciones</a> y <a href="#" className="underline hover:text-slate-800">Política de tratamiento de datos</a>
              </span>
            </label>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* 2. DIRECTORIO (MARCAS Y CATEGORÍAS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
          {/* Marcas (Ocupa más espacio) */}
          <div className="lg:col-span-6">
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-4">Marcas Principales</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 text-[13px]">
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:underline">Nike</a>
                <a href="#" className="hover:underline">adidas</a>
                <a href="#" className="hover:underline">Under Armour</a>
                <a href="#" className="hover:underline">Asics</a>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:underline">Levi's</a>
                <a href="#" className="hover:underline">Nautica</a>
                <a href="#" className="hover:underline">Diesel</a>
                <a href="#" className="hover:underline">Converse</a>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:underline">Timberland</a>
                <a href="#" className="hover:underline">Us Polo Assn</a>
                <a href="#" className="hover:underline">CAT</a>
                <a href="#" className="hover:underline">Koaj</a>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:underline">Tommy Hilfiger</a>
                <a href="#" className="hover:underline">Velez</a>
                <a href="#" className="hover:underline">Totto</a>
                <a href="#" className="hover:underline">Calvin Klein</a>
              </div>
            </div>
          </div>
          
          {/* Categorías */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-4">Mujer</h4>
            <div className="flex flex-col space-y-2 text-[13px]">
              <a href="#" className="hover:underline">Tenis</a>
              <a href="#" className="hover:underline">Blusas y Camisas</a>
              <a href="#" className="hover:underline">Belleza</a>
              <a href="#" className="hover:underline">Accesorios Mujer</a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-4">Hombre</h4>
            <div className="flex flex-col space-y-2 text-[13px]">
              <a href="#" className="hover:underline">Tenis</a>
              <a href="#" className="hover:underline">Camisas</a>
              <a href="#" className="hover:underline">Belleza</a>
              <a href="#" className="hover:underline">Accesorios</a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-4">Niños</h4>
            <div className="flex flex-col space-y-2 text-[13px]">
              <a href="#" className="hover:underline">Ropa de Bebé</a>
              <a href="#" className="hover:underline">Ropa Niños 2 a 7</a>
              <a href="#" className="hover:underline">Ropa Niños 8 a 16</a>
              <a href="#" className="hover:underline">Juguetes</a>
            </div>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* 3. INFORMACIÓN Y SERVICIO AL CLIENTE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-8">
          <div>
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-4">Síguenos en</h4>
            <div className="flex gap-4">
              <a href="#" className="text-slate-600 hover:text-pink-600"><FaInstagram size={24} /></a>
              <a href="#" className="text-slate-600 hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="#" className="text-slate-600 hover:text-blue-600"><FaFacebook size={24} /></a>
              <a href="#" className="text-slate-600 hover:text-red-600"><FaYoutube size={24} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-4">Acerca de RandiWay</h4>
            <div className="flex flex-col space-y-2 text-[13px]">
              <a href="#" className="hover:underline">Nosotros</a>
              <a href="#" className="hover:underline">Términos y Condiciones</a>
              <a href="#" className="hover:underline">Política de Privacidad</a>
              <a href="#" className="hover:underline">Política de Cookies</a>
              <a href="#" className="hover:underline">Trabaja con Nosotros</a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-4">Servicio al Cliente</h4>
            <div className="flex flex-col space-y-2 text-[13px]">
              <a href="#" className="hover:underline">Cambios o Devoluciones</a>
              <a href="#" className="hover:underline">Medios de Pago</a>
              <a href="#" className="hover:underline">Garantías</a>
              <a href="#" className="hover:underline">Seguimiento de tu Pedido</a>
              <a href="#" className="hover:underline">Contacto / PQRS</a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-4">Novedades</h4>
            <div className="flex flex-col space-y-2 text-[13px]">
              <a href="#" className="hover:underline">Alianzas Comerciales</a>
              <a href="#" className="hover:underline">Crédito Directo</a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-4">Aliados</h4>
            <div className="flex flex-col gap-3">
              {/* Placeholders para logos de entidades reguladoras */}
              <div className="h-10 bg-slate-100 flex items-center justify-center text-xs font-bold border border-slate-200">Cámara de Comercio</div>
              <div className="h-10 bg-slate-100 flex items-center justify-center text-xs font-bold border border-slate-200">Superintendencia</div>
            </div>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* 4. MÉTODOS DE PAGO Y APP */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-bold text-slate-800">Medios de pago</span>
            <div className="flex gap-2">
              {/* Aquí irían tus logos reales de métodos de pago. Uso iconos como placeholder */}
              <div className="flex items-center justify-center w-12 h-8 bg-slate-100 rounded border"><CreditCard size={18}/></div>
              <div className="flex items-center justify-center w-12 h-8 bg-slate-100 rounded border"><CreditCard size={18}/></div>
              <div className="flex items-center justify-center w-12 h-8 bg-slate-100 rounded border"><CreditCard size={18}/></div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-bold text-slate-800">App</span>
            <div className="flex gap-2 text-slate-400">
               <Smartphone size={24} />
            </div>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* 5. SEGURIDAD */}
        <div className="flex flex-wrap items-center gap-6 py-6 text-[11px] sm:text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 text-sm">Compra Segura</span>
            <ShieldCheck size={20} className="text-blue-600" />
            <span>Sitio seguro con criptografía (SSL)</span>
          </div>
          <div className="flex items-center gap-2 border-l border-slate-300 pl-6">
            <Lock size={18} className="text-green-600" />
            <span>Blindado contra robo de información y clonación</span>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* 6. LEGALES Y COPYRIGHT */}
        <div className="py-8 text-center text-[11px] text-slate-500 leading-relaxed">
          <p>© RandiWay 2023 - 2026. Todos los derechos reservados. - <a href="#" className="underline">Conoce nuestra Política de privacidad.</a> - <a href="#" className="underline">Política de Datos.</a></p>
          <p>RandiWay S.A.S. - RUC: 1098765432001. Sector Pucará Alto, Otavalo, Ecuador.</p>
          <p>Línea telefónica: (06) 292-XXXX</p>
          <p>Lunes a Viernes de 8:00 a.m. a 5:00 p.m. - Sábados de 8:00 a.m. a 12:00 p.m.</p>
          <p>Notificaciones judiciales: legal@randiway.com.ec</p>
          
          <div className="mt-4">
            <a href="#" className="underline hover:text-slate-800">Cambiar a la versión mobile o tablet</a>
          </div>
        </div>

      </div>
    </footer>
  );
}