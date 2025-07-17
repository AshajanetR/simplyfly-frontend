import './FlightInfoCard.css';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const FlightInfoCard = () => {
  const { from, to, date,adults } = useSelector((state) => state.flight);

//   const dates = {
//   depart: date,
// };

// const departureTime = dates?.depart
//   ? dayjs(new Date(dates.depart)).format("MMM D | h:mm A")
//   : "Not Available";
// console.log("departureTime ",departureTime);

  const arrivalTime = "Nov 15 | 10:30 AM"; 
  console.log("From to date adults",from,to,date,adults)
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
        {/* <div className="date-time">{departureTime}</div> */}
        <div className="date-time">{dayjs(date).format("DD MMM, hh:mm A")}</div>
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
