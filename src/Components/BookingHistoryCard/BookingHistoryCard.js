import React, { useRef } from "react";
import "./BookingHistoryCard.css";
import axios from "axios";
import html2pdf from "html2pdf.js";

const BookingHistoryCard = ({ booking, onCancel }) => {
  const receiptRef = useRef();
  const flight = booking.flight;

  const formatDateTime = (datetime) =>
    new Date(datetime).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

  const departureDate = new Date(flight.depertureT);
  const now = new Date();
  const isFutureDeparture = departureDate > now;

  const handleCancelBooking = async () => {
    try {
      // ✅ Generate PDF receipt
      html2pdf().from(receiptRef.current).save(`Booking_${booking.bookingId}_Receipt.pdf`);

      // ✅ Call cancel API
     await axios.put(
  `http://localhost:8085/api/bookings/cancelbooking/${booking.bookingId}`,
  {}, // 👈 empty body
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
);

      // ✅ Update status in parent
      onCancel(booking.bookingId);
    } catch (error) {
      console.error("Cancel booking failed:", error);
    }
  };

  return (
    <div className="booking-card">
      <div className="booking-image">
        <img
          src="https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={`Flight ${flight.flightNumber}`}
        />
      </div>
      <div className="booking-content">
        <h2>Booking #{booking.bookingId}</h2>
        <h3 className="booking-status">
          Airline: {flight.airlineName || "N/A"}
        </h3>
        <p className="booking-status">{booking.bookingStatus}</p>
        <p className="booking-date">Booked on: {booking.bookingDate}</p>
        <p className="booking-total">Total Fare: ₹{booking.totalFare}</p>

        <hr />

        <h4>
          {flight.source} → {flight.destination}
        </h4>
        <p>Flight No: {flight.flightNumber}</p>
        <p>Departure: {formatDateTime(flight.depertureT)}</p>
        <p>Arrival: {formatDateTime(flight.arrivalT)}</p>
        <p>Baggage: {flight.baggage}</p>
        <p>Fare per Passenger: ₹{flight.fare}</p>

        <h4>Passengers:</h4>
        <ul>
          {booking.passengers.map((p) => (
            <li key={p.passsengerId}>
              {p.passengerName} (Seat {p.seatNo})
            </li>
          ))}
        </ul>

        {isFutureDeparture && (
          <button className="booking-btn" onClick={handleCancelBooking}>
            Cancel Booking
          </button>
        )}
      </div>

      {/* ✅ Hidden receipt for html2pdf */}
      <div style={{ display: "none" }}>
        <div ref={receiptRef}>
          <h1>Booking Cancellation Receipt</h1>
          <p>Booking ID: {booking.bookingId}</p>
          <p>Status: CANCELLED</p>
          <h3>Flight: {flight.flightNumber}</h3>
          <p>
            {flight.source} → {flight.destination}
          </p>
          <p>Departure: {formatDateTime(flight.depertureT)}</p>
          <h4>Passengers:</h4>
          <ul>
            {booking.passengers.map((p) => (
              <li key={p.passsengerId}>
                {p.passengerName} (Seat {p.seatNo})
              </li>
            ))}
          </ul>
          <p>Total Fare Refunded: ₹{booking.totalFare}</p>
          <p>Thank you for choosing SimplyFly ✈️</p>
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryCard;
