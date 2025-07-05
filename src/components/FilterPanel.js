import React from 'react';
import './FilterPanel.css';

const FilterPanel = ({ filters, onFilterChange }) => {
  const handleFilterChange = (key, value) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      eventType: '',
      month: '',
      searchTerm: ''
    });
  };

  const eventTypes = [
    { value: '', label: 'All Events' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'wedding', label: 'Wedding Anniversary' },
    { value: 'death anniversary', label: 'Death Anniversary' },
    { value: 'urs shareef', label: 'Urs Shareef' }
  ];

  const months = [
    { value: '', label: 'All Months' },
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' }
  ];

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>
          <i className="fas fa-filter"></i>
          Filter Events
        </h3>
        <button className="clear-btn" onClick={clearAllFilters}>
          <i className="fas fa-times"></i>
          Clear All
        </button>
      </div>
      
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="eventType">Event Type</label>
          <select
            id="eventType"
            value={filters.eventType}
            onChange={(e) => handleFilterChange('eventType', e.target.value)}
          >
            {eventTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="month">Month</label>
          <select
            id="month"
            value={filters.month}
            onChange={(e) => handleFilterChange('month', e.target.value)}
          >
            {months.map(month => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="searchTerm">Search Person</label>
          <div className="search-input-container">
            <i className="fas fa-search"></i>
            <input
              type="text"
              id="searchTerm"
              placeholder="Enter person's name..."
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 