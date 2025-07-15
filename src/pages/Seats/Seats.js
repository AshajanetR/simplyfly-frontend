// Pages/Seats/Seats.jsx

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FlightInfoCard from '../../Components/FlightInfoCard/FlightInfoCard';
import PassengerSeatCard from '../../Components/PassengerSeatcard/PassengerSeatcard';
import Button from '../../Components/Button/ButtonComp';

import SeatSelector from '../../Components/SeatSelector/SeatSelector';
import NewBusinessSeats from '../../Components/SeatSelector/NewBusinessSeats';
import {API_BASE_URL} from '../../apiConfig'
import './Seats.css';
// import Seatselector2 from '../../Components/SeatSelector/Seatelector2';

import Seatselector2 from '../../Components/SeatSelector/Seatselector2'
import axios from 'axios';

const Seats = () => {
  const passengerRedux = useSelector((state) => state.passenger?.passengers || []);
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const count = useSelector((state) => state.flight.adults);

  const [passengers, setPassengers] = useState([]);
  const [flightbook,setflightbook] = useState([]);
  const allSeatNos = flightbook.flatMap(booking => 
  booking.passengers.map(passenger => passenger.seatNo)
);

console.log(allSeatNos);
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
    fetchseatnos();
  }, []);
  const flightId = JSON.parse(localStorage.getItem("Flight"));
  console.log("flightid",flightId.flightId)
  const token = localStorage.getItem("token");
  
  const fetchseatnos = async()=>{
    try {
      const res = await axios.get(`${API_BASE_URL}/api/bookings/flight/${flightId.flightId}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    console.log(res.data)
    setflightbook(res.data)
    } catch (error) {
      console.log(error)
    }
   

  }

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
        <SeatSelector allSeatNos ={allSeatNos} />
        <NewBusinessSeats allSeatNos ={allSeatNos} />
        <Seatselector2 allSeatNos ={allSeatNos} />
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
