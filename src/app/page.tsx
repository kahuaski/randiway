import Hero from '../componets/Hero';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import CartSidebar from '@/componets/CartSidebar';


export default function Home() {
  return (
   <div>
      <Header />
  <Hero/>
  <CartSidebar/>
  <Footer/>
   </div>
  );
}