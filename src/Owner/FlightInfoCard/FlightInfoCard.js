import './FlightInfoCard.css';
import dayjs from 'dayjs';

const FlightInfoCard = ({ flight }) => {
  if (!flight) return null;

  const formattedDeparture = dayjs(flight.depertureT).format("DD MMM, hh:mm A");
  const formattedArrival = dayjs(flight.arrivalT).format("DD MMM, hh:mm A");

  return (
    <div className="flight-card1">
      <div className="card-section from-to">
        <div className="airport">
          <div className="code">{flight.source}</div>
          <div className="location">{flight.departureAirport || "Departure Airport"}</div>
        </div>
        <div className="arrow">→</div>
        <div className="airport">
          <div className="code">{flight.destination}</div>
          <div className="location">{flight.destinationAirport || "Arrival Airport"}</div>
        </div>
      </div>

      <div className="card-section middle">
        <div className="date-time">
          Departure: <strong>{formattedDeparture}</strong>
        </div>
        <div className="label">Departing</div>
        <div className="notch"></div>
      </div>

      <div className="card-section arriving">
        <div className="date-time">
          Arrival: <strong>{formattedArrival}</strong>
        </div>
        <div className="label">Arriving</div>
      </div>
    </div>
  );
};

export default FlightInfoCard;
