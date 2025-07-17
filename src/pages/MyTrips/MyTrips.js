import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingHistoryCard from "../../Components/BookingHistoryCard/BookingHistoryCard";
import "./MyTrips.css"; 
import { useSelector } from "react-redux";

const MyTrips = () => {
  const [bookings, setBookings] = useState([]);
  const user = useSelector((state) => state.auth.user)
  console.log("USer id",user.userId)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:8085/api/bookings/user/${user.userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const bookingData = response.data;

        const bookingsWithFlights = await Promise.all(
          bookingData.map(async (booking) => {
            const flightRes = await axios.get(
              `http://localhost:8085/api/flights/${booking.flightId}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            return {
              ...booking,
              flight: flightRes.data,
            };
          })
        );

        setBookings(bookingsWithFlights);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.bookingId === bookingId ? { ...b, bookingStatus: "CANCELLED" } : b
      )
    );
  };

  return (
    <div className="my-trips-container">
      <h1 className="my-trips-title">✈️ My Trips</h1>

      {bookings.length === 0 ? (
        <p className="no-bookings">No bookings found.</p>
      ) : (
        <div className="my-trips-grid">
          {bookings.map((booking) => (
            <BookingHistoryCard
              key={booking.bookingId}
              booking={booking}
              onCancel={handleCancel}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTrips;
