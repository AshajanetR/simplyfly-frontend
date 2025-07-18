import React from 'react';
import airlineLogo from "../../images/image25.png";
import dayjs from 'dayjs';
import './AdminFlightCard.css'; 

const AdminFlightCard = ({ flight, onDelete, onUpdate, onViewSeats }) => {
  if (!flight) return null;

  return (
    <div className="flight-card">
      <div className="flight-left">
        <img
          src={airlineLogo}
          alt="Airline Logo"
          className="airline-logo"
        />
        <div className="airline-details">
          <div className="duration">{dayjs(flight.depertureT).format("DD MMM, hh:mm A")}</div>
          <div className="airline-name">{flight.flightNumber}</div>
        </div>
      </div>

      <div className="flight-middle">
        {flight.source} → {flight.destination}
      </div>

      <div className="flight-right">
        ₹ {flight.fare}
       
      </div>
    </div>
  );
};

export default AdminFlightCard;
