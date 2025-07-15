import './FlightInfoCard.css';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const FlightInfoCard = () => {
  const { from, to, date } = useSelector((state) => state.flight);

  const departureTime = date?.depart
    ? dayjs(date.depart).format("MMM D | h:mm A")
    : "Not Available";

  const arrivalTime = "Jul 15 | 10:30 AM"; // 🔁 Replace with real data if you store it

  return (
    <div className="flight-card1">
      <div className="card-section from-to">
        <div className="airport">
          <div className="code">{from || "N/A"}</div>
          <div className="location">Departure</div>
        </div>
        <div className="arrow">→</div>
        <div className="airport">
          <div className="code">{to || "N/A"}</div>
          <div className="location">Arrival</div>
        </div>
      </div>

      <div className="card-section middle">
        <div className="date-time">{departureTime}</div>
        <div className="label">Departing</div>
        <div className="notch"></div>
      </div>

      <div className="card-section arriving">
        <div className="date-time">{arrivalTime}</div>
        <div className="label">Arriving</div>
      </div>
    </div>
  );
};

export default FlightInfoCard;
