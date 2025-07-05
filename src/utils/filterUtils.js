// Filter utility functions
export const filterData = (data, filters) => {
  if (!data || data.length === 0) return [];
  
  return data.filter(item => {
    // Filter by event type
    if (filters.eventType && filters.eventType !== '') {
      const eventType = item.Event ? item.Event.toLowerCase() : '';
      const filterEventType = filters.eventType.toLowerCase();
      
      // Handle special case for death anniversary
      if (filterEventType === 'death anniversary' && eventType !== 'barsi') {
        return false;
      } else if (filterEventType === 'barsi' && eventType !== 'barsi') {
        return false;
      } else if (filterEventType !== 'death anniversary' && filterEventType !== 'barsi' && eventType !== filterEventType) {
        return false;
      }
    }
    
    // Filter by month
    if (filters.month && filters.month !== '') {
      const itemMonth = item.Month ? item.Month.toLowerCase() : '';
      const filterMonth = filters.month.toLowerCase();
      if (itemMonth !== filterMonth) {
        return false;
      }
    }
    
    // Filter by search term (name)
    if (filters.searchTerm && filters.searchTerm.trim() !== '') {
      const searchTerm = filters.searchTerm.toLowerCase().trim();
      const name = item['Name of Person'] ? item['Name of Person'].toLowerCase() : '';
      if (!name.includes(searchTerm)) {
        return false;
      }
    }
    
    return true;
  });
};

export const getUniqueEventTypes = (data) => {
  const eventTypes = new Set();
  
  data.forEach(item => {
    if (item.Event) {
      const eventType = item.Event.toLowerCase();
      if (eventType === 'barsi') {
        eventTypes.add('Death Anniversary');
      } else if (eventType === 'birthday') {
        eventTypes.add('Birthday');
      } else if (eventType === 'wedding') {
        eventTypes.add('Wedding Anniversary');
      } else if (eventType === 'urs shareef') {
        eventTypes.add('Urs Shareef');
      } else {
        eventTypes.add(item.Event);
      }
    }
  });
  
  return Array.from(eventTypes).sort();
};

export const getUniqueMonths = (data) => {
  const months = new Set();
  
  data.forEach(item => {
    if (item.Month) {
      months.add(item.Month);
    }
  });
  
  return Array.from(months).sort((a, b) => {
    const monthOrder = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthOrder.indexOf(a) - monthOrder.indexOf(b);
  });
};

export const getEventStats = (data) => {
  const stats = {
    total: data.length,
    birthdays: 0,
    weddings: 0,
    deathAnniversaries: 0,
    others: 0
  };
  
  data.forEach(item => {
    if (item.Event) {
      const eventType = item.Event.toLowerCase();
      if (eventType === 'birthday') {
        stats.birthdays++;
      } else if (eventType === 'wedding') {
        stats.weddings++;
      } else if (eventType === 'barsi') {
        stats.deathAnniversaries++;
      } else {
        stats.others++;
      }
    }
  });
  
  return stats;
}; 