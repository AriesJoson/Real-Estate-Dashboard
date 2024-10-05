import React, { useState } from 'react';
import '../css/filtercard.css';

function FilterCard({ onClose, properties, onFilter }) {
  const [status, setStatus] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');

  // Generates int options for max and min prices
  const generatePriceOptions = (maxValue, increment) => {
    const options = [];
    for (let i = increment; i <= maxValue; i += increment) {
      options.push(
        <option key={i} value={i}>
          ${i.toLocaleString()}
        </option>
      );
    }
    return options;
  };

  // Extract unique locations from properties json data
  const uniqueLocations = Array.from(
    new Set(properties.map((property) => property.location.state))
  );

  // Handles the Filtered properties
  const handleApplyFilters = () => {
    // Pass filter results to onFilter that will be rendered in table component
    onFilter({ searchQuery: '', status, minPrice, maxPrice, location  });

    // Close the filter card after applying filters
    onClose();
  };

  return (
    <div className="filter-overlay">
      <div className="filter-content">
        <div className='close-box'>
          <i onClick={onClose} className='bx bx-x'></i>
        </div>
        <h1 className='filter-header'>More Filters</h1>
        <div className='filter-details'>
          <div className='filter-contents'>
            <h3 className='filter-title'>Occupancy Status</h3>
            <div className='filter-options'>
              <button 
                className={`filter-btn ${status === '' ? 'active' : ''}`} 
                onClick={() => setStatus('')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${status === 'Occupied' ? 'active' : ''}`} 
                onClick={() => setStatus('Occupied')}
              >
                Occupied
              </button>
              <button 
                className={`filter-btn ${status === 'Available' ? 'active' : ''}`} 
                onClick={() => setStatus('Available')}
              >
                Available
              </button>
            </div>
          </div>
          <div className='filter-contents'>
            <h3 className='filter-title'>Location</h3>
            <div className='filter-options'>
              <select 
                name='location' 
                className='location-dropdown' 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value=''>Select Location</option>
                {uniqueLocations.map((city, index) => (
                  <option key={index} value={city.toLowerCase()}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='filter-contents'>
            <h3 className='filter-title'>Price</h3>
            <div className='filter-options'>
              <div className='filter-maximum'>
                <label htmlFor='max-price'>Max Price</label>
                <select 
                  id='max-price' 
                  className='price-dropdown' 
                  value={maxPrice} 
                  onChange={(e) => setMaxPrice(e.target.value)}
                >
                  <option value=''>No max</option>
                  {generatePriceOptions(10000000, 100000)}
                </select>
              </div>
              <div className='filter-minimum'>
                <label htmlFor='min-price'>Min Price</label>
                <select 
                  id='min-price' 
                  className='price-dropdown' 
                  value={minPrice} 
                  onChange={(e) => setMinPrice(e.target.value)}
                >
                  <option value=''>No min</option>
                  {generatePriceOptions(10000000, 100000)}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='btn-filter'>
          <button className='filter-btns' onClick={onClose}>Clear</button>
          <button className='filter-btns' onClick={handleApplyFilters}>Show Results</button>
        </div>
      </div>
    </div>
  );
}

export default FilterCard;