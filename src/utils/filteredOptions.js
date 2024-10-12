
export const filteredOptions = (filters, propertyData) => {
    const { status, minPrice, maxPrice, location } = filters;
    
    const filtered = propertyData.properties.filter(property => {
      const matchesStatus = status ? property.status === status : true;
      const matchesMinPrice = minPrice ? property.price >= minPrice : true;
      const matchesMaxPrice = maxPrice ? property.price <= maxPrice : true;
      const matchesLocation = location ? property.location.state.toLowerCase() === location : true;
  
      return matchesStatus && matchesMinPrice && matchesMaxPrice && matchesLocation;
    });

    return filtered
};