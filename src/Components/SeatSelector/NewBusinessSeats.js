

import React from "react";
import "./NewBusinessSeats.css";
import { useDispatch, useSelector } from "react-redux";
import { addSeat, removeSeat } from "../../Store/seatSlice";

const generateBusinessSeats = () => {
  const seatLetters = ["A", "B", "D", "E"];
  const rows = [];

  for (let row = 1; row <= 5; row++) {
    const seats = seatLetters.map((letter) => `${row}${letter}`);
    rows.push({ row, seats });
  }

  return rows;
};

const NewBusinessSeats = ({ bookedSeatNos = [], canceledSeatNos = [] }) => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const { adults } = useSelector((state) => state.flight);
  const seatRows = generateBusinessSeats();

  const handleSelect = (seat) => {
    const isBooked = bookedSeatNos.includes(seat);
    const isCanceled = canceledSeatNos.includes(seat);
    const isDisabled = isBooked && !isCanceled;

    if (isDisabled) return;

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
            const isBooked = bookedSeatNos.includes(seat);
            const isCanceled = canceledSeatNos.includes(seat);
            const isDisabled = isBooked && !isCanceled;

            return (
              <React.Fragment key={seat}>
                {isGap && <div className="seat-gap" />}
                <div
                  className={`seat1 green 
                    ${selectedSeats.includes(seat) ? "selected" : ""} 
                    ${isDisabled ? "booked" : ""}`}
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


export default NewBusinessSeats;
