# Birthday Database Dashboard

A modern React web application for managing birthdays, wedding anniversaries, and death anniversaries with a beautiful, responsive interface.

## Features

- **📊 Statistics Dashboard**: View comprehensive statistics of all events
- **🔍 Advanced Filtering**: Filter events by type, month, or search by person's name
- **📅 Upcoming Events**: See events scheduled for the current month
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful, clean interface with smooth animations

## Event Types Supported

- **🎂 Birthdays**: Personal birthdays
- **💒 Wedding Anniversaries**: Wedding celebration dates
- **🕯️ Death Anniversaries (Barsi)**: Remembrance dates
- **🌟 Urs Shareef**: Special religious commemorations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project
2. Navigate to the project directory:
   ```bash
   cd birthday-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
birthday-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── FilterPanel.js
│   │   ├── FilterPanel.css
│   │   ├── EventTable.js
│   │   ├── EventTable.css
│   │   ├── StatsCards.js
│   │   ├── StatsCards.css
│   │   ├── UpcomingEvents.js
│   │   └── UpcomingEvents.css
│   ├── hooks/
│   │   └── useCSVData.js
│   ├── utils/
│   │   ├── dateUtils.js
│   │   └── filterUtils.js
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## How to Use

### Viewing Data
- The dashboard automatically loads and displays all events
- Statistics cards show the total count of each event type
- The main table displays all events with their details

### Filtering Events
1. **By Event Type**: Use the dropdown to filter by Birthday, Wedding Anniversary, Death Anniversary, or Urs Shareef
2. **By Month**: Select a specific month to see events for that month only
3. **By Person**: Use the search box to find specific people by name
4. **Clear Filters**: Click "Clear All" to reset all filters

### Upcoming Events
- Click "See Upcoming Events" to view events scheduled for the current month
- Events are sorted by date with the nearest events first
- "Today" events are highlighted with a special badge

## Customization

### Adding New Data
Currently, the data is embedded in the `useCSVData.js` hook. To add new data:

1. Open `src/hooks/useCSVData.js`
2. Add new entries to the CSV data string following the format:
   ```
   Month,Name of Person,Event,Date
   ```

### Modifying Event Types
To add new event types:

1. Update the `formatEventType` function in `src/utils/dateUtils.js`
2. Add color mapping in `getEventTypeColor` function
3. Update the filter options in `src/components/FilterPanel.js`

### Styling
The application uses CSS modules for styling. Each component has its own CSS file:
- Global styles: `src/styles/index.css` and `src/styles/App.css`
- Component-specific styles: `src/components/[ComponentName].css`

## Data Format

The CSV data should follow this format:
```csv
Month,Name of Person,Event,Date
January,John Doe,Birthday,15th January
February,Jane Smith,Wedding,14th February
March,Bob Johnson,Barsi,10th March
```

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Modern styling with Flexbox and Grid
- **Font Awesome**: Icon library for UI elements
- **Inter Font**: Beautiful typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] CSV file upload functionality
- [ ] Export filtered data to CSV
- [ ] Email notifications for upcoming events
- [ ] Calendar view
- [ ] Event categories and tags
- [ ] Data persistence with local storage or database
- [ ] User authentication and multiple user support

## Support

If you encounter any issues or have questions, please create an issue in the repository.

---

Built with ❤️ using React 