import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderAfter from '../../Components/HeaderAfter/HeaderAfter';
import Ticket from '../../Components/Ticket/Ticket';
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import './Tickets.css';
import axios from 'axios';
import { Button } from 'antd';

const Tickets = () => {
  // const { bookingId } = useParams();
  
  const [bookid,setbookid] = useState(0);
  const [passengers, setPassengers] = useState([]);
  const [flightInfo, setFlightInfo] = useState(null);

  let [amt,setAmt] = useState(0)
  
    const getAmt = (fare) =>{
      setAmt(fare+121);
    }

    useEffect(()=>{
       setbookid(localStorage.getItem('bookingId'))
    },[])

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Fetch booking details
        const bookingRes = await axios.get(
          `http://localhost:8086/api/bookings/${bookid}`,
          config
        );
        const booking = bookingRes.data;
        const flightId = booking.flightId;

        // Fetch flight details
        const flightRes = await axios.get(
          `http://localhost:8086/api/flights/${flightId}`,
          config
        );
        const flight = flightRes.data;

        // Format passenger ticket data
        const formattedData = booking.passengers.map((p) => ({
          airline: flight.airlineName || 'Unknown Airline',
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
  }, [bookid]);
  const nav = useNavigate();
  const handlebookagain =()=>{
    nav('/home')
    localStorage.removeItem('Flight');
    localStorage.removeItem('flightSearch')
    localStorage.removeItem('passengerInfo')
    localStorage.removeItem('bookingId')
    localStorage.removeItem('selectedSeats')
    localStorage.removeItem('eTicketData')
  }
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
        <FlightSummaryCard getAmt={getAmt} flight={flightInfo} />
      </div>
      <div classname="buttons-pay">
      <Button onClick={handlebookagain}>Book Again</Button>
      </div>
    </div>
  );
};

export default Tickets;
