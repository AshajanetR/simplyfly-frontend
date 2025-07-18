import React, { useRef, useMemo } from "react";
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

  
  const imageList = useMemo(() => [
    "https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?q=80&w=678&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1164&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492136344046-866c85e0bf04?q=80&w=1164&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1661938399624-3495425e5027?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?q=80&w=1071&auto=format&fit=crop",
  ], []);

  
  const randomImage = useMemo(() => {
    const index = Math.floor(Math.random() * imageList.length);
    return imageList[index];
  }, [imageList]);

  const handleCancelBooking = async () => {
    try {
      html2pdf()
        .from(receiptRef.current)
        .save(`Booking_${booking.bookingId}_Receipt.pdf`);

      await axios.put(
        `http://localhost:8085/api/bookings/cancelbooking/${booking.bookingId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      onCancel(booking.bookingId);
    } catch (error) {
      console.error("Cancel booking failed:", error);
    }
  };

  return (
    <div className="booking-card">
      <div className="booking-image">
        <img
          src={randomImage}
          alt={`Flight ${flight.flightNumber}`}
        />
      </div>

      <div className="booking-content">
        <h2>Booking #{booking.bookingId}</h2>
        <h3 className="booking-status">Airline: {flight.airlineName || "N/A"}</h3>
        <p className="booking-status">
          Status:{" "}
          <span
            style={{
              color: booking.bookingStatus === "CANCELLED" ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            {booking.bookingStatus}
          </span>
        </p>
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

       
        {isFutureDeparture && booking.bookingStatus !== "CANCELLED" && (
          <button className="booking-btn" onClick={handleCancelBooking}>
            Cancel Booking
          </button>
        )}
      </div>

      
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
