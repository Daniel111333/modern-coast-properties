
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PropertyFilter from './components/PropertyFilter'
import PropertyListing from './components/PropertyListing'
import propertyData from './data/properties'

function App() {
  const [selectedPage, setSelectedPage] = useState('inicio');
  const [filteredProperties, setFilteredProperties] = useState(propertyData);

  return (
    <div className="app-container">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      
      {selectedPage === 'inicio' && (
        <Hero 
          title="Villa con Vistas al Mar"
          subtitle="Descubra nuestra exclusiva selección de propiedades en las zonas más privilegiadas del litoral mediterráneo"
          backgroundImage="/lovable-uploads/66e36243-4774-4dc9-9963-2fe7c550d877.png"
          location="COSTA BLANCA & COSTA DEL SOL"
        />
      )}
      
      {selectedPage === 'propiedades' && (
        <>
          <div className="properties-header">
            <h1>Propiedades</h1>
          </div>
          <PropertyFilter setFilteredProperties={setFilteredProperties} />
          <div className="property-listings">
            {filteredProperties.map((property, index) => (
              <PropertyListing key={index} property={property} />
            ))}
          </div>
        </>
      )}
      
      {selectedPage === 'contacto' && (
        <div className="contact-section">
          <h1>Contacto</h1>
          <p>Contacte con nosotros para más información sobre nuestras propiedades.</p>
          {/* Formulario de contacto iría aquí */}
        </div>
      )}
      
      <footer>
        <p>&copy; 2025 Global Costa Invest. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
