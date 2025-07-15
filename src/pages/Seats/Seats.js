// Pages/Seats/Seats.jsx

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FlightInfoCard from '../../Components/FlightInfoCard/FlightInfoCard';
import PassengerSeatCard from '../../Components/PassengerSeatcard/PassengerSeatcard';
import Button from '../../Components/Button/ButtonComp';

import SeatSelector from '../../Components/SeatSelector/SeatSelector';
import NewBusinessSeats from '../../Components/SeatSelector/NewBusinessSeats';

import './Seats.css';
// import Seatselector2 from '../../Components/SeatSelector/Seatelector2';

import Seatselector2 from '../../Components/SeatSelector/Seatselector2'

const Seats = () => {
  const passengerRedux = useSelector((state) => state.passenger?.passengers || []);
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const count = useSelector((state) => state.flight.adults);

  const [passengers, setPassengers] = useState([]);

const seatData = () =>{
  if (passengerRedux.length > 0) {
      setPassengers(passengerRedux);
    } else {
      const stored = JSON.parse(localStorage.getItem('passengerInfo')) || [];
      setPassengers(stored);
    }
}

  useEffect(() => {
    // Sync passengers from Redux or fallback to localStorage
    if (passengers.length === 0){
    seatData()
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  return (
    <div className="seats-page">
      {/* Flight Information */}
      <div className="flightInfoCard">
        <FlightInfoCard />
      </div>

      {/* Seat Maps */}
      <div className="box-seats">
        <SeatSelector />
        <NewBusinessSeats />
        <Seatselector2 />
      </div>

      {/* Passenger Info Cards with assigned seats */}
      <div className="passenger-cards">
        {passengers.map((passenger, index) => (
          <PassengerSeatCard
            key={index}
            passenger={passenger}
            seatNumber={selectedSeats[index] || "Not Assigned"}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="buttons-seats">
        <Link to="/passengers">
          <Button text="Back to Passengers" />
        </Link>
        <Link to="/paymentDetails">
          <Button text="Continue to Payment" />
        </Link>
      </div>
    </div>
  );
};

export default Seats;
