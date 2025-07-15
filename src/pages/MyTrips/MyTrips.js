import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingHistoryCard from "../../Components/BookingHistoryCard/BookingHistoryCard";

const MyTrips = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        // 1️⃣ Get bookings
        const response = await axios.get(
          "http://localhost:8085/api/bookings/user/8",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const bookingData = response.data;

        // 2️⃣ Get each booking's flight
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

  // ✅ Update status locally when cancelled
  const handleCancel = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.bookingId === bookingId ? { ...b, bookingStatus: "CANCELLED" } : b
      )
    );
  };

  return (
    <div className="my-trips">
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <BookingHistoryCard
            key={booking.bookingId}
            booking={booking}
            onCancel={handleCancel}
          />
        ))
      )}
    </div>
  );
};

export default MyTrips;
