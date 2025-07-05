// Date utility functions
export const getCurrentMonth = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[new Date().getMonth()];
};

export const parseDate = (dateString) => {
  if (!dateString) return null;
  
  // Handle different date formats
  const cleaned = dateString.trim();
  
  // Extract day from formats like "14th January", "25th May", etc.
  const dayMatch = cleaned.match(/(\d{1,2})/);
  if (!dayMatch) return null;
  
  const day = parseInt(dayMatch[1]);
  return day;
};

export const getMonthEvents = (data, month) => {
  return data.filter(event => 
    event.Month && event.Month.toLowerCase() === month.toLowerCase()
  );
};

export const getUpcomingEvents = (data, currentMonth) => {
  const currentEvents = getMonthEvents(data, currentMonth);
  const currentDay = new Date().getDate();
  
  return currentEvents.filter(event => {
    const eventDay = parseDate(event.Date);
    return eventDay && eventDay >= currentDay;
  }).sort((a, b) => {
    const dayA = parseDate(a.Date);
    const dayB = parseDate(b.Date);
    return dayA - dayB;
  });
};

export const formatEventType = (eventType) => {
  if (!eventType) return 'Unknown';
  
  const type = eventType.toLowerCase();
  if (type === 'barsi') return 'Death Anniversary';
  if (type === 'birthday') return 'Birthday';
  if (type === 'wedding') return 'Wedding Anniversary';
  if (type === 'urs shareef') return 'Urs Shareef';
  
  return eventType;
};

export const getEventTypeColor = (eventType) => {
  if (!eventType) return '#64748b';
  
  const type = eventType.toLowerCase();
  if (type === 'barsi') return '#ef4444';
  if (type === 'birthday') return '#22c55e';
  if (type === 'wedding') return '#f59e0b';
  if (type === 'urs shareef') return '#8b5cf6';
  
  return '#64748b';
};

export const getDaysUntilEvent = (eventDate, currentMonth) => {
  const eventDay = parseDate(eventDate);
  const currentDay = new Date().getDate();
  
  if (!eventDay) return null;
  
  const daysUntil = eventDay - currentDay;
  return daysUntil >= 0 ? daysUntil : null;
}; 