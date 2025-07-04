import "./FlightCard.css";
import airlineLogo from "../../images/image25.png";
const FlightCard = () => {
  return (
    <div className="flight-card">
      <div className="flight-left">
        <img
          src={airlineLogo}
          alt="Airline Logo"
          className="airline-logo"
        />
        <div className="airline-details">
          <div className="duration">16h 45m</div>
          <div className="airline-name">Hawaiian Airlines</div>
        </div>
      </div>

      <div className="flight-middle">
        7:00AM - 4:15PM
      </div>

      <div className="flight-right">
        ₹ 45,399
      </div>
    </div>
  );
};

export default FlightCard;
