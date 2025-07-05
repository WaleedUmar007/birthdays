import React from 'react';
import { formatEventType, getEventTypeColor, getDaysUntilEvent } from '../utils/dateUtils';
import './UpcomingEvents.css';

const UpcomingEvents = ({ events, currentMonth }) => {
  if (!events || events.length === 0) {
    return (
      <div className="upcoming-events">
        <div className="upcoming-header">
          <h3>
            <i className="fas fa-calendar-check"></i>
            Upcoming Events - {currentMonth}
          </h3>
        </div>
        <div className="upcoming-empty">
          <i className="fas fa-calendar-times"></i>
          <h4>No upcoming events this month</h4>
          <p>Enjoy your peaceful {currentMonth}!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="upcoming-events">
      <div className="upcoming-header">
        <h3>
          <i className="fas fa-calendar-check"></i>
          Upcoming Events - {currentMonth} ({events.length})
        </h3>
      </div>
      
      <div className="upcoming-grid">
        {events.map((event, index) => (
          <UpcomingEventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

const UpcomingEventCard = ({ event }) => {
  const eventType = formatEventType(event.Event);
  const eventColor = getEventTypeColor(event.Event);
  const daysUntil = getDaysUntilEvent(event.Date);
  
  const getEventIcon = (eventType) => {
    const type = eventType.toLowerCase();
    if (type.includes('birthday')) return 'fas fa-birthday-cake';
    if (type.includes('wedding')) return 'fas fa-heart';
    if (type.includes('death') || type.includes('barsi')) return 'fas fa-candle-holder';
    return 'fas fa-calendar-alt';
  };

  return (
    <div className="upcoming-card">
      <div className="upcoming-card-header">
        <div 
          className="event-icon"
          style={{ backgroundColor: eventColor }}
        >
          <i className={getEventIcon(eventType)}></i>
        </div>
        <div className="event-info">
          <h4 className="event-name">{event['Name of Person']}</h4>
          <p className="event-type">{eventType}</p>
        </div>
      </div>
      
      <div className="upcoming-card-body">
        <div className="event-date">
          <i className="fas fa-calendar"></i>
          <span>{event.Date}</span>
        </div>
        
        {daysUntil !== null && (
          <div className="days-until">
            {daysUntil === 0 ? (
              <span className="today-badge">Today!</span>
            ) : (
              <span className="days-badge">
                {daysUntil} {daysUntil === 1 ? 'day' : 'days'} to go
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents; 