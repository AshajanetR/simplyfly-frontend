import React, { useState } from 'react';
import PaymentDetail from '../../Components/PaymentDetail/PaymentDetail';
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './PaymentDetails.css';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import { useSelector } from 'react-redux';

const PaymentDetails = () => {
  const [amt, setAmt] = useState(0);
  const navigate = useNavigate();

  const getAmt = (fare) => {
    setAmt(fare + 121); 
  };

  const generateTransactionId = () => {
    return 'TXN' + Date.now();
  };

  const user = useSelector((state) => state.auth.user);
  const flight = JSON.parse(localStorage.getItem("Flight"));
  const passengers = JSON.parse(localStorage.getItem("passengerInfo")) || [];
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
  const token = localStorage.getItem("token");

  const handleBooking = async () => {
    if (!user || !flight || passengers.length === 0 || selectedSeats.length === 0) {
      alert("Missing booking information.");
      return;
    }

    const transactionId = generateTransactionId();

    const mappedPassengers = passengers.map((passenger, index) => ({
      passengerId: 0,
      passengerName: passenger.passengerName,
      passengerAge: passenger.passengerAge,
      passengerGender: passenger.passengerGender,
      seatNo: selectedSeats[index],
      bookingId: 0
    }));

    const bookingData = {
      bookingDTO: {
        userId: user.userId,
        flightId: flight.flightId,
        bookingStatus: "BOOKED",
        passengers: mappedPassengers
      },
      paymentDTO: {
        paymentId: 0,
        bookingId: 0,
        paymentType: "UPI",
        amount: amt,
        paymentStatus: "PAID",
        transactionId: transactionId
      }
    };

    try {
      const res = await axios.post(`${API_BASE_URL}/api/bookings`, bookingData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("Booking successful:", res.data);
      localStorage.setItem('bookingId',res.data.bookingId);

      alert("Booking successful!");

     
      navigate("/paymentConfirm", { state: { transId: transactionId } });

    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div>
      <div className='payment-detail'>
        <PaymentDetail />
        <FlightSummaryCard getAmt={getAmt} />
      </div>
      <div className='buttons-pay'>
        <Button onClick={() => navigate('/seats')}>Back</Button>
        <Button onClick={handleBooking}>Confirm</Button>
      </div>
    </div>
  );
};

export default PaymentDetails;
