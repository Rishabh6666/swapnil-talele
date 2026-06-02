/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import GrowthVisualizer from './components/GrowthVisualizer';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070b14] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Mesh Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      <div className="fixed top-[40%] left-[30%] w-[40vw] h-[30vw] max-w-[500px] bg-indigo-500/80/10 lg:bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none -z-0"></div>

      {/* 1. Header Navigation */}
      <Header />

      {/* Main page content scroll sections */}
      <main id="main-content" className="relative z-10">
        {/* 2. Hero banner segment */}
        <Hero />

        {/* 3. About biography segment */}
        <About />

        {/* 4. Products Portfolio segment */}
        <Products />

        {/* 5. Services and diagnostics segment */}
        <Services />

        {/* 6. Growth Compounding Visualizer simulator segment */}
        <GrowthVisualizer />

        {/* 7. Why Individual investors trust us segment */}
        <WhyChooseUs />

        {/* 8. Testimonials check-nodes */}
        <Testimonials />

        {/* 9. FAQs accordion support block */}
        <FAQs />

        {/* 10. Contact form and direct communication channels */}
        <Contact />
      </main>

      {/* 11. Footer segment with regulatory disclaimers */}
      <Footer />

      {/* 12. Floating WhatsApp pill widget */}
      <FloatingWhatsApp />
    </div>
  );
}
