import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewBookings.css';
import { useParams, useLocation } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8086';

const ViewBookings = () => {
  const { flightId } = useParams();
  const location = useLocation();
  const flight = location.state?.flight;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE_URL}/api/bookings/flight/${flightId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [flightId]);

  return (
    <div className="view-bookings-container">
      <h2>Bookings for Flight #{flight?.flightNumber || flightId}</h2>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found for this flight.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.bookingId} className="booking-card">
            <h3>Booking #{booking.bookingId}</h3>
            <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
            <p><strong>Total Fare:</strong> ₹{booking.totalFare}</p>
            <p><strong>Status:</strong> {booking.bookingStatus}</p>

            <div className="passenger-section">
              <h4>Passengers</h4>
              {booking.passengers.map((p) => (
                <div key={p.passsengerId} className="passenger-card">
                  <p><strong>Name:</strong> {p.passengerName}</p>
                  <p><strong>Age:</strong> {p.passengerAge}</p>
                  <p><strong>Gender:</strong> {p.passengerGender}</p>
                  <p><strong>Seat No:</strong> {p.seatNo}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewBookings;
