// Components/SeatSelector/SeatSelector2.jsx

import React from "react";
import "./SeatSelector.css";
import { useDispatch, useSelector } from "react-redux";
import { addSeat, removeSeat } from "../../Store/seatSlice";

const generateAltSeats = () => {
  const seatLetters = ["A", "B", "C", "D", "E", "F"];
  const rows = [];
  for (let row = 6; row <= 18; row++) {
    const seats = seatLetters.map((letter) => `${row}${letter}`);
    rows.push({ row, seats });
  }
  return rows;
};

const Seatselector2 = () => {
  const { adults } = useSelector((state) => state.flight);
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const dispatch = useDispatch();
  const seatRows = generateAltSeats();

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
      {seatRows.map(({ row, seats }) => (
        <div key={row} className="seat-row">
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

export default Seatselector2;
