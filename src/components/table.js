import React, { useState } from 'react';
import '../css/table.css'
import FilterPanel from './filter'
import propertyData from '../script/mockData.json'
import PropertyCard from './PropertyCard';

function PropertyList() {

// State to manage the filtered properties
const [filteredProperties, setFilteredProperties] = useState(propertyData.properties);

// Store the selected property
const [selectedProperty, setSelectedProperty] = useState(null);

// Function to handle showing the popup
const handleShowDetails = (property) => {
  // Set the selected property data
  setSelectedProperty(property);
};

// Function to handle closing the popup
const handleClosePopup = () => {
  // Clear the selected property
  setSelectedProperty(null);
};

// Hadles all the filter from filter component and rendered it in the table
const handleFilter = (filters) => {
  const { status, minPrice, maxPrice, location } = filters;
  
  const filtered = propertyData.properties.filter(property => {
    const matchesStatus = status ? property.status === status : true;
    const matchesMinPrice = minPrice ? property.price >= minPrice : true;
    const matchesMaxPrice = maxPrice ? property.price <= maxPrice : true;
    const matchesLocation = location ? property.location.state.toLowerCase() === location : true;

    return matchesStatus && matchesMinPrice && matchesMaxPrice && matchesLocation;
  });
  setFilteredProperties(filtered);
};

// Hadles the search filter for the table
const handleSearch = (searchQuery) => {
  const query = searchQuery ? searchQuery.toLowerCase() : '';

  // Filter the mock data based on name, city, state, or status
  const filtered = propertyData.properties.filter(property =>
    property.name.toLowerCase().includes(query) ||
    property.location.city.toLowerCase().includes(query) ||
    property.location.state.toLowerCase().includes(query) ||
    property.status.toLowerCase().includes(query)
  );

  setFilteredProperties(filtered);
};

  return (
    <div className='plist-container'>
        <div className='plist-box'>
            <div className="plist-header">Property List</div>
            <div className='filter-panel'>
            <FilterPanel 
              onSearch={handleSearch} // Pass the handleFilter function for Search
              onFilter={handleFilter} // Pass the handleFilter function for filters
              properties={filteredProperties} 
            />
            </div>
            <div className='plist-table'>
              <table className="property-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Property Name</th>
                    <th>Address</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render properties */}
                  {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                      <tr key={property.id}>
                        <td>
                          <img className='property-img' src={property.thumbnail} alt='img' />
                        </td>
                        <td>{property.name}</td>
                        <td>{property.location.state}</td>
                        <td>${property.price.toLocaleString()}</td>
                        <td className={property.status === 'Available' ? 'status-available' : 'status-occupied'}>
                          {property.status}
                        </td>
                        <td>
                          <div className='table-buttons'>
                            <i className="bx bx-show-alt" onClick={() => handleShowDetails(property)}></i>
                            <i className='bx bx-edit'></i>
                            <i className='bx bx-trash'></i>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">No properties found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {selectedProperty && (
              <PropertyCard property={selectedProperty} onClose={handleClosePopup} />
            )}
        </div>
    </div>
  )
}

export default PropertyList