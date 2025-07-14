import React, { useEffect, useState } from 'react';
import HeaderAfter from '../../Components/HeaderAfter/HeaderAfter';
import Ticket from '../../Components/Ticket/Ticket';
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import './Tickets.css';

const Tickets = () => {
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    const passengersData = [
      {
        airline: "Hawaiian Airlines",
        passengerName: "Sai Jog",
        flightDate: "25 Feb 2025",
        departureTime: "09:00 AM",
        arrivalTime: "04:15 PM",
        from: "San Francisco",
        destination: "Tokyo",
        seatNumber: "21A",
        flightNumber: "HA451",
      },
      {
        airline: "Hawaiian Airlines",
        passengerName: "Ravi Kumar",
        flightDate: "25 Feb 2025",
        departureTime: "09:00 AM",
        arrivalTime: "04:15 PM",
        from: "San Francisco",
        destination: "Tokyo",
        seatNumber: "21B",
        flightNumber: "HA451",
      },
    ];

    localStorage.setItem("eTicketData", JSON.stringify(passengersData));
    setPassengers(passengersData);
  }, []);

  return (
    <div>
      <HeaderAfter />

      <div className="ticket-page-heading">
        <h2>Download E-ticket</h2>
        <p>Your flight ticket is ready!</p>
      </div>

      <div className="ticket-summary-container">
        <div className="ticket-multiple-container">
          {passengers.map((passenger, index) => (
            <Ticket key={index} index={index} />
          ))}
        </div>
        <FlightSummaryCard />
      </div>
    </div>
  );
};

export default Tickets;
