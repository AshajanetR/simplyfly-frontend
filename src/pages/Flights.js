import React, { useEffect, useState } from 'react';
import FlightSearchBar from '../Components/FlightSearchBar/FlightSearchBar';
import FlightCard from '../Components/Flightcard/Flightcard';
import { Link } from 'react-router-dom';

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [adults, setAdults] = useState(1); 

  useEffect(() => {
    const storedData = localStorage.getItem("flightSearch");
    if (storedData) {
      const parsed = JSON.parse(storedData);
      setFlights(parsed.response || []);
      setAdults(parsed.request?.adults || 1); 
    }
  }, []);

 
  const handleSearchComplete = (newFlights) => {
    setFlights(newFlights || []);

    
    const storedData = localStorage.getItem("flightSearch");
    if (storedData) {
      const parsed = JSON.parse(storedData);
      setAdults(parsed.request?.adults || 1);
    }
  };

  return (
    <div>
      <FlightSearchBar onSearchComplete={handleSearchComplete} />

      {flights.length > 0 ? (
        flights.map((flight) => (
          <Link
            to="/passengers"
            key={flight.flightId}
            state={{ flight ,adults}}
            style={{ textDecoration: 'none' }}
          >
            <FlightCard flight={flight} adult={adults} />
          </Link>
        ))
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>No flights found.</p>
      )}
    </div>
  );
};

export default Flights;
