import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from "react-icons/fa";
import "./FlightSearchBar.css"

const FlightSearchBar = () => {
  return (
    <div className="search-bar">
      <div className="input-group">
        <FaPlaneDeparture className="icon" />
        <button className="input-btn">From where?</button>
      </div>

      <div className="input-group">
        <FaPlaneArrival className="icon" />
        <button className="input-btn">Where to?</button>
      </div>

      <div className="input-group">
        <FaCalendarAlt className="icon" />
        <button className="input-btn">Depart - Return</button>
      </div>

      <div className="input-group">
        <FaUser className="icon" />
        <button className="input-btn">1 adult</button>
      </div>

      <button className="search-button">Search</button>
    </div>
  );
};

export default FlightSearchBar;
