import React from "react";
import "./BusinessClassSeats.css";

const generateBusinessSeats = () => {
  const seatLetters = ["A", "B", "D", "E"];
  const rows = [];

  for (let row = 1; row <= 5; row++) {
    const seats = seatLetters.map((letter) => ({
      seatNumber: `${row}${letter}`,
    }));
    rows.push({ row, seats });
  }

  return rows;
};

const BusinessClassSeats = ({ bookedSeats = [] }) => {
  return (
    <div className="seat-selector">
      {generateBusinessSeats().map(({ row, seats }) => (
        <div key={row} className="seat-row">
          <span className="row-number">{row}</span>
          {seats.map((seat, index) => {
            const isGap = index === 2;
            const isBooked = bookedSeats.includes(seat.seatNumber);

            return (
              <React.Fragment key={seat.seatNumber}>
                {isGap && <div className="seat-gap" />}
                <div className={`seat1 green ${isBooked ? "booked" : ""}`}>
                  {seat.seatNumber}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default BusinessClassSeats;
