import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from "react-icons/fa";
import "./FlightSearchBar.css"
import { Link } from "react-router-dom";

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

      <Link to="/signIn"><button className="search-button">Search</button></Link>
    </div>
  );
};

export default FlightSearchBar;
