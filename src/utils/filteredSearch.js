

export const filteredProperty = (searchQuery, propertyData) => {
    const query = searchQuery ? searchQuery.toLowerCase() : '';
  
    // Filter the searchQuery based on name, city, state, or status and rendered it in the table
    const filtered = propertyData.properties.filter(property =>
      property.name.toLowerCase().includes(query) ||
      property.location.city.toLowerCase().includes(query) ||
      property.location.state.toLowerCase().includes(query) ||
      property.status.toLowerCase().includes(query)
    );
    
    return filtered
};

