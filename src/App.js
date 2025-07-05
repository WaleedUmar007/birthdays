import React, { useState, useEffect } from 'react';
import { useCSVData } from './hooks/useCSVData';
import { filterData } from './utils/filterUtils';
import { getCurrentMonth, getUpcomingEvents } from './utils/dateUtils';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import EventTable from './components/EventTable';
import StatsCards from './components/StatsCards';
import UpcomingEvents from './components/UpcomingEvents';
import './styles/App.css';

function App() {
  const { data, loading, error } = useCSVData();
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    eventType: '',
    month: '',
    searchTerm: ''
  });
  const [showUpcoming, setShowUpcoming] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      const filtered = filterData(data, filters);
      setFilteredData(filtered);
    }
  }, [data, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleShowUpcoming = () => {
    setShowUpcoming(!showUpcoming);
  };

  const upcomingEvents = getUpcomingEvents(data, getCurrentMonth());

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <i className="fas fa-exclamation-triangle"></i>
        <h2>Error Loading Data</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="dashboard-header">
          <h1>Event Dashboard</h1>
          <button 
            className="upcoming-btn"
            onClick={handleShowUpcoming}
          >
            <i className="fas fa-calendar-alt"></i>
            {showUpcoming ? 'Hide Upcoming Events' : 'See Upcoming Events'}
          </button>
        </div>
        
        <StatsCards data={data} />
        
        {showUpcoming && (
          <UpcomingEvents 
            events={upcomingEvents} 
            currentMonth={getCurrentMonth()}
          />
        )}
        
        <FilterPanel 
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        
        <EventTable 
          data={filteredData}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App; 