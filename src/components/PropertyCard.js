import React from 'react';
import '../css/propertycard.css';

function PropertyCard({ property, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className='close-box'>
            <i onClick={onClose} className='bx bx-x'></i>
        </div>
        <div className='card-contents'>
            <div className='card-images'>
                {property.property_images.map((image, index) => (
                <img key={index} className='house-img' src={image} alt={`Property Image`} />
                ))}
             </div>
            <div className='card-details'>
                <div className='card-name'> 
                    <h1 className='card-title'>{property.name}</h1>
                    <h2 className='card-price'>${property.price.toLocaleString()}</h2>
                </div>
                <div className='card-location'> 
                    <i className='bx bxs-location-plus'></i>
                    <p className='card-text'>{property.location.city}, {property.location.state}</p>
                </div>
                <div className='card-status'> 
                    <p className={property.status === 'Available' ? 'card-available' : 'card-occupied'}>{property.status}</p>
                </div>
                <div className='card-overview'>
                    <h4>Overview</h4>
                    <div className='overview-details'>
                        <div className='overview-box'>
                            <i className='bx bxs-door-open'></i>
                            <p className='card-text'>{property.features.houserooms} Rooms</p>
                        </div>
                        <div className='overview-box'>
                            <i className='bx bxs-bath'></i>
                            <p className='card-text'>{property.features.bathrooms} Baths</p>
                        </div>
                        <div className='overview-box'>
                            <i className='bx bxs-bed'></i>
                            <p className='card-text'>{property.features.bedrooms} Master Bed</p>
                        </div>
                        <div className='overview-box'>
                            <i className='bx bx-expand-alt'></i>
                            <p className='card-text'>{property.features.size_sqft} Sq, Ft.</p>
                        </div>
                    </div>
                </div>
                <div className='card-amenities'>
                    <h4>Amenities</h4>
                    <div className='amenities-details'>
                        <div className='overview-box'>
                            <p className='card-text'>Pool</p>
                        </div>
                        <div className='overview-box'>
                            <p className='card-text'>Parking</p>
                        </div>
                        <div className='overview-box'>
                            <p className='card-text'>Balcony</p>
                        </div>
                        <div className='overview-box'>
                            <p className='card-text'>Wi-fi</p>
                        </div>
                        <div className='overview-box'>
                            <p className='card-text'>Fire Alarm</p>
                        </div>
                    </div>
                </div>
                <div className='card-description'>
                    <h4>Details</h4>
                    <p className='description-text'>{property.description}</p>
                </div>
                <div className='card-button'> 
                    <button className='contact-btn'>Contact Agent</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
