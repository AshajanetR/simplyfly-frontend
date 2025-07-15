// Components/SeatSelector/NewBusinessSeats.jsx

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

const NewBusinessSeats = ({ allSeatNos = [] }) => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const { adults } = useSelector((state) => state.flight);
  const seatRows = generateBusinessSeats();

  const handleSelect = (seat) => {
    if (allSeatNos.includes(seat)) return; // prevent selecting booked seats

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
            const isGap = index === 2; // aisle gap
            const isBooked = allSeatNos.includes(seat);

            return (
              <React.Fragment key={seat}>
                {isGap && <div className="seat-gap" />}
                <div
                  className={`seat1 green ${selectedSeats.includes(seat) ? "selected" : ""} ${isBooked ? "booked" : ""}`}
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
