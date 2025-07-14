import React, { useState } from "react";
import "./SeatSelector.css";

const generateSeats = () => {
  const rows = [];
  const seatsPerRow = 6; // A-B C D-E-F
  const seatLetters = ["A", "B", "C", "D", "E", "F"];

  for (let row = 19; row <= 31; row++) {
    const isExitRow = row === 26;
    const rowSeats = [];

    for (let seat = 0; seat < seatsPerRow; seat++) {
      const seatNumber = `${row}${seatLetters[seat]}`;
      rowSeats.push(seatNumber);
    }

    rows.push({ row, seats: rowSeats, isExitRow });
  }

  return rows;
};

const SeatSelector = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const seatRows = generateSeats();

  const handleSelect = (seat) => {
    setSelectedSeat(seat);
  };

  return (
    <div className="seat-selector">
      {seatRows.map(({ row, seats, isExitRow }) => (
        <div key={row} className={`seat-row ${isExitRow ? "exit-row" : ""}`}>
          <span className="row-number">{row}</span>

          {seats.map((seat, index) => (
            <div
              key={seat}
              className={`seat ${selectedSeat === seat ? "selected" : ""}`}
              onClick={() => handleSelect(seat)}
            >
              {seat}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatSelector;
