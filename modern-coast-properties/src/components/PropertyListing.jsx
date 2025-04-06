
function PropertyListing({ property }) {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        {property.status && (
          <div className="property-status">{property.status}</div>
        )}
      </div>
      <div className="property-details">
        <h3 className="property-type">{property.type}</h3>
        <h2 className="property-title">{property.title}</h2>
        <div className="property-price">{property.price}</div>
        <div className="property-location">{property.location}</div>
      </div>
    </div>
  );
}

export default PropertyListing;
