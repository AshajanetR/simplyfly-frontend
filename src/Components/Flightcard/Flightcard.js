import "./FlightCard.css";
import airlineLogo from "../../images/image25.png";
const FlightCard = ({flight}) => {
  return (
    <div className="flight-card">
      <div className="flight-left">
        <img
          src={airlineLogo}
          alt="Airline Logo"
          className="airline-logo"
        />
        <div className="airline-details">
          <div className="duration">{flight.depertureT}</div>
          <div className="airline-name">{flight.flightNumber}</div>
        </div>
      </div>

      <div className="flight-middle">
        {flight.source} - {flight.destination}
      </div>

      <div className="flight-right">
        ₹ {flight.fare}
      </div>
    </div>
  );
};

export default FlightCard;
