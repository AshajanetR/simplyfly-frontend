import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FlightInfoCard from '../../Owner/FlightInfoCard/FlightInfoCard';
import BusinessClassSeats from '../../Owner/BusinessClassSeats/BusinessClassSeats';
import SeatsSelector from '../../Owner/SeatSelector/SeatSelector';
import SeatsSelectorMid from '../../Owner/SeatSelectorMid/SeatSelectorMid';
import './ViewFlight.css';

const API_BASE_URL = 'http://localhost:8085';

const ViewFlight = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;

  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const fetchBookedSeats = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("User not authenticated");
        return;
      }

      try {
        const res = await axios.get(`${API_BASE_URL}/api/bookings/flights/${id}/booked-seats`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBookedSeats(res.data);
      } catch (err) {
        console.error("Failed to fetch booked seats", err);
      }
    };

    fetchBookedSeats();
  }, [id]);

  const handleViewBookings = () => {
    navigate(`/view-bookings/${id}`, { state: { flight } });
  };

  return (
    <div className="view-flight-container">
      <div className="flight-info">
        <FlightInfoCard flight={flight} />
      </div>

      <div className="seats-layout">
        <SeatsSelectorMid bookedSeats={bookedSeats} />
        <BusinessClassSeats bookedSeats={bookedSeats} />
        <SeatsSelector bookedSeats={bookedSeats} />
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className="view-bookings-btn" onClick={handleViewBookings}>
          View Bookings
        </button>
      </div>
    </div>
  );
};

export default ViewFlight;
