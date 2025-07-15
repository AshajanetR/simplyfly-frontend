import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderAfter from '../../Components/HeaderAfter/HeaderAfter';
import Ticket from '../../Components/Ticket/Ticket';
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import './Tickets.css';
import axios from 'axios';

const Tickets = () => {
  const { bookingId } = useParams();
  const [passengers, setPassengers] = useState([]);
  const [flightInfo, setFlightInfo] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        
        const bookingRes = await axios.get(
          `http://localhost:8086/api/bookings/${bookingId}`,
          config
        );
        const booking = bookingRes.data;
        const flightId = booking.flightId;

        
        const flightRes = await axios.get(
          `http://localhost:8086/api/flights/${flightId}`,
          config
        );
        const flight = flightRes.data;

        console.log(flight);

        
        const formattedData = booking.passengers.map(p => ({
          airline: flight.airlineName, 
          passengerName: p.passengerName,
          flightDate: booking.bookingDate,
          departureTime: new Date(flight.depertureT).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          arrivalTime: new Date(flight.arrivalT).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          from: flight.source,
          destination: flight.destination,
          seatNumber: p.seatNo,
          flightNumber: flight.flightNumber,
        }));

        localStorage.setItem("eTicketData", JSON.stringify(formattedData));
        setPassengers(formattedData);
        setFlightInfo(flight);
      } catch (error) {
        console.error("Error fetching ticket data:", error.response || error.message);
      }
    };

    fetchTicketData();
  }, [bookingId]);

  return (
    <div>
      <HeaderAfter />
      <div className="ticket-page-heading">
        <h2>Download E-ticket</h2>
        <p>Your flight ticket is ready!</p>
      </div>

      <div className="ticket-summary-container">
        <div className="ticket-multiple-container">
          {passengers.map((_, index) => (
            <Ticket key={index} index={index} />
          ))}
        </div>
        <FlightSummaryCard flight={flightInfo} />
      </div>
    </div>
  );
};

export default Tickets;
