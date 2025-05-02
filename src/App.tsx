import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  // Update the document title
  React.useEffect(() => {
    document.title = 'Lumina Photography | Professional Photography Services';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <PortfolioSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;