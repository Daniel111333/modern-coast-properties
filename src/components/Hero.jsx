
function Hero({ title, subtitle, backgroundImage, location }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        {location && (
          <div className="location-tag">
            {location}
          </div>
        )}
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-buttons">
          <button className="primary-button">
            Explorar Propiedades
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button className="secondary-button">Contáctenos</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
