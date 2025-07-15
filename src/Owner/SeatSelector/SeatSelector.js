import React from "react";
import "./SeatSelector.css";

const generateSeats = () => {
  const rows = [];
  const seatLetters = ["A", "B", "C", "D", "E", "F"];

  for (let row = 19; row <= 31; row++) {
    const rowSeats = seatLetters.map((letter) => `${row}${letter}`);
    rows.push({ row, seats: rowSeats });
  }

  return rows;
};

const SeatSelector = ({ bookedSeats = [] }) => {
  return (
    <div className="seat-selector">
      {generateSeats().map(({ row, seats }) => (
        <div key={row} className="seat-row">
          <span className="row-number">{row}</span>
          {seats.map((seat, idx) => {
            const isBooked = bookedSeats.includes(seat);
            const isGap = idx === 3;

            return (
              <React.Fragment key={seat}>
                {isGap && <div className="seat-gap" />}
                <div className={`seat ${isBooked ? "booked" : ""}`}>
                  {seat}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatSelector;
