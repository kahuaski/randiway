import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartSidebar from '@/components/CartSidebar';


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