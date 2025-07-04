import './FlightInfoCard.css';

const FlightInfoCard = () => {
  return (
    <div className="flight-card1">
      <div className="card-section from-to">
        <div className="airport">
          <div className="code">SFO</div>
          <div className="location">California, US</div>
        </div>
        <div className="arrow">→</div>
        <div className="airport">
          <div className="code">NRT</div>
          <div className="location">Tokyo, Japan</div>
        </div>
      </div>

      <div className="card-section middle">
        <div className="date-time">Feb 25 &nbsp; <strong>7:00AM</strong></div>
        <div className="label">Departing</div>
        <div className="notch"></div>
      </div>

      <div className="card-section arriving">
        <div className="date-time">Mar 21 | <strong>12:15PM</strong></div>
        <div className="label">Arriving</div>
      </div>
    </div>
  );
};

export default FlightInfoCard;
