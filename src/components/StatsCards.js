import React from 'react';
import { getEventStats } from '../utils/filterUtils';
import './StatsCards.css';

const StatsCards = ({ data }) => {
  const stats = getEventStats(data);

  const cards = [
    {
      title: 'Total Events',
      value: stats.total,
      icon: 'fas fa-calendar-alt',
      color: '#3b82f6',
      bgColor: '#dbeafe'
    },
    {
      title: 'Birthdays',
      value: stats.birthdays,
      icon: 'fas fa-birthday-cake',
      color: '#22c55e',
      bgColor: '#dcfce7'
    },
    {
      title: 'Weddings',
      value: stats.weddings,
      icon: 'fas fa-heart',
      color: '#f59e0b',
      bgColor: '#fef3c7'
    },
    {
      title: 'Death Anniversaries',
      value: stats.deathAnniversaries,
      icon: 'fas fa-candle-holder',
      color: '#ef4444',
      bgColor: '#fee2e2'
    }
  ];

  return (
    <div className="stats-cards">
      {cards.map((card, index) => (
        <div key={index} className="stats-card">
          <div className="stats-card-content">
            <div className="stats-info">
              <h4 className="stats-title">{card.title}</h4>
              <p className="stats-value">{card.value}</p>
            </div>
            <div 
              className="stats-icon"
              style={{ 
                backgroundColor: card.bgColor,
                color: card.color
              }}
            >
              <i className={card.icon}></i>
            </div>
          </div>
          <div className="stats-progress">
            <div 
              className="stats-progress-bar"
              style={{ 
                width: `${stats.total > 0 ? (card.value / stats.total) * 100 : 0}%`,
                backgroundColor: card.color
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards; 