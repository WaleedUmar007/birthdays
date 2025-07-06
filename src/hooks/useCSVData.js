import { useState, useEffect } from 'react';

export const useCSVData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // For now, we'll use the static data from the CSV file
        // In a real application, you might want to use a file upload or API
        const csvData = `Month,Name of Person,Event,Date
January,Hassan Nawaz,Birthday,14th January 
,Ahad Ishtiaq,Birthday,13th January
,Amma G,Barsi,21st January
,Khala Shaista,Wedding,5th January
February,Fahad Ishtiaq,Birthday,17th February
,Ahmad Usama,Birthday,8th February
March,Hamza Hamdan,Birthday,6th March
,Talha Nawaz,Birthday,9th March
,Laiba Shafqat,Birthday,11th March
April, Maham Ashfaq,Birthday,18th April
,Ishtiaq,Birthday,6th April
,Ashfaq,Birthday,11th April
,Nawaz,Birthday,15th April
May,Special Mention ,Urs Shareef,9th May
,Abdullah Ashfaq,Birthday,12th May
,Jannat Ashfaq,,
,Nana Abu,Barsi,12th May
,Umar Farooq,Birthday,25th May
,Aiman Shujaat,Birthday,31st May
June,Phupho Bushra,Birthday,3rd June
,Usama Nawaz,Birthday,17th June
,Waleed Umar,Birthday,19th June
,Annie,Birthday,25th June
,Dada Abu,Barsi ,25th June
,Dada Rauf,Barsi,29th June
,Dadi Sakina,Barsi ,25th June
,Abba Gee,Barsi,24th June
July,Fatima,Birthday,12 July
,Dadi,Barsi,16th July
,Huzaifa Shahid,Birthday,20th July
,Minha Hamdan,Birthday,26th July
August,Ali Shafqat,Birthday,12th August
,Ayesha Sahar,Birthday,29th August
September,Nani ,Barsi,4th September
,Par Nani,Barsi,4th September
,Ali Nawaz,Birthday,6th September
,Shafqat,Birthday,9th September
,Hamdan,Birthday,13th September
,Mohid Ishtiaq,Birthday,14th September
,Rizwan Shahid,Wedding,21st September
,Phupho Rizwana,Wedding ,27th September
October ,Sadia Umar,Birthday,1st October
,Usama Nawaz,Wedding,8th October
,Phupho Rizwana,Birthday,21st October
November,Rizwan Shahid,Birthday,2nd November
,Hina,Birthday,3rd November
,Ahmad Shujat,Birthday,4th November
,Ashfaq,Wedding,11th November
,Umar Farooq,Wedding,14th November
,Shujat,Birthday,15th November
,Hamdan,Wedding,28th November
,Shafqat,Wedding,26th November
,Khala Shaista,Birthday,27th November
,Asad Naeem,Birthday,26th November
December,Usman Naeem,Birthday,21st December
,Shujat,Wedding,29th December`;

        // Parse CSV data
        const parsedData = parseCSV(csvData);
        setData(parsedData);
        
      } catch (err) {
        setError('Failed to load CSV data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCSVData();
  }, []);

  return { data, loading, error };
};

// Simple CSV parser function
const parseCSV = (csvText) => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',');
  const data = [];
  
  let currentMonth = '';
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const values = line.split(',');
    const row = {};
    
    headers.forEach((header, index) => {
      row[header] = values[index] ? values[index].trim() : '';
    });
    
    // Handle month continuation (when month is empty, use previous month)
    if (row.Month) {
      currentMonth = row.Month;
    } else {
      row.Month = currentMonth;
    }
    
    // Skip rows with no name or event
    if (row['Name of Person'] && row.Event) {
      data.push(row);
    }
  }
  
  return data;
}; 
