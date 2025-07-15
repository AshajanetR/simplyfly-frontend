// Components/SeatSelector/SeatSelector.jsx

import React from "react";
import "./SeatSelector.css";
import { useDispatch, useSelector } from "react-redux";
import { addSeat, removeSeat } from "../../Store/seatSlice";

const generateSeats = () => {
  const rows = [];
  const seatLetters = ["A", "B", "C", "D", "E", "F"];
  for (let row = 19; row <= 31; row++) {
    const isExitRow = row === 26;
    const seats = seatLetters.map((letter) => `${row}${letter}`);
    rows.push({ row, seats, isExitRow });
  }
  return rows;
};

const SeatSelector = () => {
  const { adults } = useSelector((state) => state.flight);
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const dispatch = useDispatch();
  const seatRows = generateSeats();

  const handleSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      dispatch(removeSeat(seat));
    } else {
      if (selectedSeats.length < adults) {
        dispatch(addSeat(seat));
      } else {
        alert(`You can only select ${adults} seat(s).`);
      }
    }
  };

  return (
    <div className="seat-selector">
      {seatRows.map(({ row, seats, isExitRow }) => (
        <div key={row} className={`seat-row ${isExitRow ? "exit-row" : ""}`}>
          <span className="row-number">{row}</span>
          {seats.map((seat, index) => {
            const isGap = index === 2;
            return (
              <React.Fragment key={seat}>
                {isGap && <div className="seat-gap" />}
                <div
                  className={`seat ${
                    selectedSeats.includes(seat) ? "selected" : ""
                  }`}
                  onClick={() => handleSelect(seat)}
                >
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
