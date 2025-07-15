import "./FlightCard.css";
import airlineLogo from "../../images/image25.png";
const FlightCard = ({flight : propFlight}) => {
  

  const flight =
    propFlight ||
    (() => {
      const stored = localStorage.getItem("flightSearch");
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.response?.[0]; // Or use a more specific flight
      }
      return null;
    })();

  if (!flight) {
    return <p style={{ color: 'red' }}>Flight data not available</p>;
  }



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