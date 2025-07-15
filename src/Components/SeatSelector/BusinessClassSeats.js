import React, { useEffect, useState } from "react";
import "./SeatSelector.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSeats } from "../../Store/seatSlice";

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
  const {adults} = useSelector((state)=>state.flight)
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatRows = generateSeats();
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.seat.selectedSeats)
  console.log("Seats",data)
  
  useEffect(() => {
  localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  dispatch(selectSeats(selectedSeats))
}, [selectedSeats]);

  const handleSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      // Deselect if already selected
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      if (selectedSeats.length < adults) {
        setSelectedSeats([...selectedSeats, seat]);
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
            const isGap = index === 2; // A B —gap— C D E F
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

      {/* Optional: Show selected seats */}
      <div className="selected-info">
        <strong>Selected Seats:</strong> {selectedSeats.join(", ") || "None"}
      </div>
    </div>
  );
};

export default SeatSelector;
