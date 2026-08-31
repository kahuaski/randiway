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
    

        <div className="py-8 text-center text-[11px] text-slate-500 leading-relaxed">
          <p>© RandiWay 2023 - 2026. Todos los derechos reservados. - <a href="#" className="underline">Conoce nuestra Política de privacidad.</a> - <a href="#" className="underline">Política de Datos.</a></p>
          <p>RandiWay S.A.S</p>
          <p>Línea telefónica: (06) 292-XXXX</p>
          <p>Lunes a Viernes de 8:00 a.m. a 5:00 p.m. - Sábados de 8:00 a.m. a 12:00 p.m.</p>
          <p>Notificaciones judiciales: legal@randiway.com.co</p>
          
          <div className="mt-4">
            <a href="https://ruraykahuaski.com/" className="underline hover:text-slate-800">kahuaski.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
}