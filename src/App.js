import logo from './logo.svg';
import React, {useEffect} from 'react';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Recommend from './components/Recommend';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import scrollreveal from "scrollreveal";
 
 export default function App () {

   return  (
   <div>
     <ScrollToTop />
     <Navbar />
     <Hero />
     <Services />
     <Recommend />
     <Testimonials />
     <Footer />
   </div>
   );
 }
 

 
