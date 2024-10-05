import React, { useState } from 'react';
import '../css/filter.css';
import FilterCard from './filterCard';

function FilterPanel({ onSearch, properties, onFilter }) {

  // State to manage the searched inputs
  const [searchQuery, setSearchQuery] = useState('');

  // State to manage the FilterCard popup
  const [showFilterCard, setShowFilterCard] = useState(false);

  // Function for toggle FilterCard
  const toggleFilterCard = () => {
    setShowFilterCard(!showFilterCard);
  };

  // Function for closing FilterCard
  const handleCloseFilter = () => {
    setShowFilterCard(false);
  };

  // Handles the search input if there's changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handles the search input if the search button is clicked
  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='filter-container'>
      <div className='filter-search'>
        <input 
          name='search'
          type="text" 
          className="search-input" 
          placeholder="Search by name or location..." 
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className='filter-buttons'>
        <div className='filter-box'>
          <button className='filter-button' onClick={toggleFilterCard}>
            <i className='bx bx-slider'></i>Filters
          </button>
        </div>
        <div className='filter-box'>
          <button 
            type="button" 
            className="search-button"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
      {showFilterCard && (
        <FilterCard 
          onClose={handleCloseFilter} 
          properties={properties} // Pass properties data to FilterCard
          onFilter={onFilter} // Pass onFilter to FilterCard
        />
      )}
    </div>
  );
}

export default FilterPanel;