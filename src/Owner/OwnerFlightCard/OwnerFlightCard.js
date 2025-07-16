import React, { useState } from "react";
import "./OwnerFlightCard.css";
import airlineLogo from "../../images/image25.png";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const OwnerFlightCard = ({ flight, onUpdate, onDelete, onView }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleCard = () => {
    setExpanded(!expanded);
  };

  const handleUpdateClick = (e) => {
    e.stopPropagation();
    onUpdate(flight);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(flight);
  };

  const handleViewClick = (e) => {
    e.stopPropagation();
    onView(flight); // 🔥 use the passed handler to navigate with state
  };

  return (
    <div
      className={`owner-flight-card ${expanded ? "expanded" : ""}`}
      onClick={toggleCard}
    >
      <div className="flight-card-top">
        <img src={airlineLogo} alt="Airline Logo" className="airline-logo" />
        <div>
          <div className="flight-number">{flight.flightNumber}</div>
          <div className="route">
            {flight.source} → {flight.destination}
          </div>
        </div>
        <div className="fare">₹ {flight.fare}</div>
      </div>

      <div className="flight-card-times">
        <div>
          <strong>Departure:</strong>{" "}
          {dayjs(flight.depertureT).format("DD MMM, hh:mm A")}
        </div>
        <div>
          <strong>Arrival:</strong>{" "}
          {dayjs(flight.arrivalT).format("DD MMM, hh:mm A")}
        </div>
      </div>

      {expanded && (
        <div className="action-buttons">
          <div className="left-buttons">
            <button className="update-btn" onClick={handleUpdateClick}>
              Update
            </button>
            <button className="delete-btn" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
          <button className="view-btn" onClick={handleViewClick}>
            View
          </button>
        </div>
      )}
    </div>
  );
};

export default OwnerFlightCard;
