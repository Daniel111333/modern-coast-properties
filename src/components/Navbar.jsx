
import { useState, useEffect } from 'react';

function Navbar({ selectedPage, setSelectedPage }) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <div className="brand-text">
          <h1>Global Costa Invest</h1>
          <p>GLOBALCOSTAINVEST.TOP</p>
        </div>
      </div>
      
      <div className="nav-links">
        <button 
          className={selectedPage === 'inicio' ? 'active' : ''} 
          onClick={() => setSelectedPage('inicio')}
        >
          INICIO
        </button>
        <button 
          className={selectedPage === 'propiedades' ? 'active' : ''} 
          onClick={() => setSelectedPage('propiedades')}
        >
          PROPIEDADES
        </button>
        <button 
          className={selectedPage === 'contacto' ? 'active' : ''} 
          onClick={() => setSelectedPage('contacto')}
        >
          CONTACTO
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
