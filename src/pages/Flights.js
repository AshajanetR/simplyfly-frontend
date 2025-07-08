import React from 'react'
import FlightSearchBar from '../Components/FlightSearchBar/FlightSearchBar';
import FlightCard from '../Components/Flightcard/Flightcard'
import { Link } from 'react-router-dom';
const Flights = () => {
  return (
    <div>
        <FlightSearchBar />
        <Link to="/passengers"><FlightCard /></Link>
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
    </div>
  )
}

export default Flights;