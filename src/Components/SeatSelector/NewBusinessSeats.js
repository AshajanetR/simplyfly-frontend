import React, { useState } from "react";
import "./NewBusinessSeats.css";

const generateBusinessSeats = () => {
  const seatLetters = ["A", "B", "D", "E"];
  const rows = [];

  for (let row = 1; row <= 5; row++) {
    const seats = seatLetters.map((letter) => ({
      seatNumber: `${row}${letter}` // ✅ fixed with backticks
    }));
    rows.push({ row, seats });
  }

  return rows;
};

const NewBusinessSeats = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const seatRows = generateBusinessSeats();

  const handleSelect = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  return (
    <div className="seat-selector">
      {seatRows.map(({ row, seats }) => (
        <div key={row} className="seat-row">
          <span className="row-number">{row}</span>
          {seats.map((seat, index) => {
            const isGap = index === 2; // A B —gap— D E
            return (
              <React.Fragment key={seat.seatNumber}>
                {isGap && <div className="seat-gap" />}
                <div
                  className={`seat1 green ${
                    selectedSeat === seat.seatNumber ? "selected" : ""
                  }`}
                  onClick={() => handleSelect(seat.seatNumber)}
                >
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

export default NewBusinessSeats;
