import React from 'react';
import { formatEventType, getEventTypeColor } from '../utils/dateUtils';
import './EventTable.css';

const EventTable = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="table-loading">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
        <p>Loading events...</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="table-empty">
        <i className="fas fa-calendar-times"></i>
        <h3>No events found</h3>
        <p>Try adjusting your filters to see more events.</p>
      </div>
    );
  }

  return (
    <div className="event-table-container">
      <div className="table-header">
        <h3>
          <i className="fas fa-table"></i>
          Events ({data.length})
        </h3>
      </div>
      
      <div className="table-wrapper">
        <table className="event-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Event Type</th>
              <th>Month</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((event, index) => (
              <EventRow key={index} event={event} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const EventRow = ({ event }) => {
  const eventType = formatEventType(event.Event);
  const eventColor = getEventTypeColor(event.Event);

  return (
    <tr className="event-row">
      <td className="name-cell">
        <div className="name-info">
          <span className="name">{event['Name of Person']}</span>
        </div>
      </td>
      <td className="event-type-cell">
        <span 
          className="event-type-badge"
          style={{ backgroundColor: eventColor }}
        >
          {eventType}
        </span>
      </td>
      <td className="month-cell">{event.Month}</td>
      <td className="date-cell">{event.Date}</td>
    </tr>
  );
};

export default EventTable; 