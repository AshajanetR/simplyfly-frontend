import React, { useState } from "react";
import "./SeatSelector2.css";

const generateSeats = () => {
  const rows = [];
  const seatLetters = ["A", "B", "C", "D", "E", "F"];
  const exitRows = [6, 14];
  const unavailableSeats = ["6F", "7A", "8A", "12A", "13F"]; // example empty seats from image

  for (let row = 6; row <= 18; row++) {
    const seats = seatLetters.map((letter) => ({
      seatNumber: `${row}${letter}`,
      isUnavailable: unavailableSeats.includes(`${row}${letter}`)
    }));

    rows.push({ row, seats, isExitRow: exitRows.includes(row) });
  }

  return rows;
};

const SeatSelector2 = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const seatRows = generateSeats();

  const handleSelect = (seat) => {
    if (!seat.isUnavailable) setSelectedSeat(seat.seatNumber);
  };

  return (
    <div className="seat-selector">
      {seatRows.map(({ row, seats, isExitRow }) => (
        <div key={row} className={`seat-row ${isExitRow ? "exit-row" : ""}`}>
          {isExitRow && <span className="exit-label">🛈 Exit row</span>}
          <span className="row-number">{row}</span>

          {seats.map((seat, index) => {
            const isGap = index === 3; // Gap between 3-3
            return (
              <React.Fragment key={seat.seatNumber}>
                {isGap && <div className="seat-gap" />}
                <div
                  className={`seat ${seat.isUnavailable ? "unavailable" : ""} ${
                    selectedSeat === seat.seatNumber ? "selected" : ""
                  }`}
                  onClick={() => handleSelect(seat)}
                >
                  {!seat.isUnavailable ? seat.seatNumber : ""}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatSelector2;
