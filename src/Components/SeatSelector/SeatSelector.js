import React from "react";
import "./SeatSelector.css";
import { useDispatch, useSelector } from "react-redux";
import { addSeat, removeSeat } from "../../Store/seatSlice";

// Generate seats from row 19 to 31 (with exit row at 26)
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

const SeatSelector = ({ bookedSeatNos = [], canceledSeatNos = [] }) => {
  const { adults } = useSelector((state) => state.flight);
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const dispatch = useDispatch();

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
      {generateSeats().map(({ row, seats, isExitRow }) => (
        <div key={row} className={`seat-row ${isExitRow ? "exit-row" : ""}`}>
          <span className="row-number">{row}</span>
          {seats.map((seat, idx) => {
            const isBooked = bookedSeatNos.includes(seat);
            const isCanceled = canceledSeatNos.includes(seat);
            const isDisabled = isBooked && !isCanceled;
            const isGap = idx === 3;

            return (
              <React.Fragment key={seat}>
                {isGap && <div className="seat-gap" />}
                <div
                  className={`seat 
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

export default SeatSelector;
