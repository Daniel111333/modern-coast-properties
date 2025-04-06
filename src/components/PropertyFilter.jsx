
import { useState } from 'react';
import propertyData from '../data/properties';

function PropertyFilter({ setFilteredProperties }) {
  const [location, setLocation] = useState('Cualquier ubicación');
  const [propertyType, setPropertyType] = useState('Cualquier tipo');
  const [bedrooms, setBedrooms] = useState('Cualquier número');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const handleSearch = () => {
    let filtered = [...propertyData];
    
    if (location !== 'Cualquier ubicación') {
      filtered = filtered.filter(property => property.location === location);
    }
    
    if (propertyType !== 'Cualquier tipo') {
      filtered = filtered.filter(property => property.type === propertyType);
    }
    
    setFilteredProperties(filtered);
    console.log("Buscando:", { location, propertyType, bedrooms });
  };

  const propertyTypes = [
    'Cualquier tipo',
    'Villa', 
    'Apartamento', 
    'Ático', 
    'Casa', 
    'Chalet', 
    'Adosado',
    'Piso',
    'Parcela',
    'Terreno',
    'Local Comercial'
  ];

  return (
    <div className="property-filter">
      <div className="filter-section">
        <label>Ubicación</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option>Cualquier ubicación</option>
          <option>Costa Blanca</option>
          <option>Costa del Sol</option>
          <option>Murcia</option>
          <option>Javea</option>
          <option>Estepona</option>
        </select>
      </div>
      
      <div className="filter-section">
        <label>Tipo de Propiedad</label>
        <div className="dropdown-container">
          <div 
            className="dropdown-header" 
            onClick={() => setShowTypeDropdown(!showTypeDropdown)}
          >
            {propertyType}
          </div>
          {showTypeDropdown && (
            <div className="dropdown-list">
              {propertyTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="dropdown-item"
                  onClick={() => {
                    setPropertyType(type);
                    setShowTypeDropdown(false);
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="filter-section">
        <label>Habitaciones</label>
        <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
          <option>Cualquier número</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4+</option>
        </select>
      </div>
      
      <div className="filter-section filter-buttons">
        <button className="filter-more">Más filtros</button>
        <button className="search-button" onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default PropertyFilter;
