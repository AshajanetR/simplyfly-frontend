import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import FlightInfoCard from '../../Components/FlightInfoCard/FlightInfoCard';
import PassengerSeatCard from '../../Components/PassengerSeatcard/PassengerSeatcard';
import Button from '../../Components/Button/ButtonComp';

import SeatSelector from '../../Components/SeatSelector/SeatSelector';
import NewBusinessSeats from '../../Components/SeatSelector/NewBusinessSeats';
import Seatselector2 from '../../Components/SeatSelector/Seatselector2';

import { API_BASE_URL } from '../../apiConfig';
import './Seats.css';
import axios from 'axios';


import { resetSeats } from '../../Store/seatSlice';

const Seats = () => {
  const dispatch = useDispatch();

  const passengerRedux = useSelector((state) => state.passenger?.passengers || []);
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const count = useSelector((state) => state.flight.adults);

  const [passengers, setPassengers] = useState([]);
  const [flightbook, setFlightbook] = useState([]);

  
  const bookedSeatNos = flightbook
    .filter((booking) => booking.bookingStatus !== 'CANCELLED')
    .flatMap((booking) => booking.passengers.map((p) => p.seatNo));

  const canceledSeatNos = flightbook
    .filter((booking) => booking.bookingStatus === 'CANCELLED')
    .flatMap((booking) => booking.passengers.map((p) => p.seatNo));

  console.log("Canceled seats ", canceledSeatNos);
  console.log("Booked Seats ", bookedSeatNos);

  const seatData = () => {
    if (passengerRedux.length > 0) {
      setPassengers(passengerRedux);
    } else {
      const stored = JSON.parse(localStorage.getItem('passengerInfo')) || [];
      setPassengers(stored);
    }
  };

  const flightId = JSON.parse(localStorage.getItem('Flight'));
  const token = localStorage.getItem('token');

  const fetchSeatNos = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/bookings/flight/${flightId.flightId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFlightbook(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(() => {
    dispatch(resetSeats());
    localStorage.removeItem('selectedSeats');
    seatData();
    fetchSeatNos();
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  return (
    <div className="seats-page">
     
      <div className="flightInfoCard">
        <FlightInfoCard />
      </div>

     
      <div className="box-seats">
        <SeatSelector
          bookedSeatNos={bookedSeatNos}
          canceledSeatNos={canceledSeatNos}
        />
        <NewBusinessSeats
          bookedSeatNos={bookedSeatNos}
          canceledSeatNos={canceledSeatNos}
        />
        <Seatselector2
          bookedSeatNos={bookedSeatNos}
          canceledSeatNos={canceledSeatNos}
        />
      </div>

      
      <div className="passenger-cards">
        {passengers.map((passenger, index) => (
          <PassengerSeatCard
            key={index}
            passenger={passenger}
            seatNumber={selectedSeats[index] || 'Not Assigned'}
          />
        ))}
      </div>

      
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
