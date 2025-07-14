import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from "react-icons/fa";
import "./FlightSearchBar.css"
import { Link } from "react-router-dom";
import FromDropdown from "../FromDropdown/FromDropdown";
import ToDropdown from "../ToDropdown/ToDropdown";
import DateDropdown from "../DateDropdown/DateDropdown";
import AdultDropdown from "../AdultDropdown/AdultDropdown";

const FlightSearchBar = () => {
  return (
    <div className="search-bar">
      <div className="input-group">
        <FromDropdown/>
      </div>

      <div className="input-group">
        <ToDropdown/>
      </div>

      <div className="input-group">
        <DateDropdown/>
      </div>

      <div className="input-group">
        <AdultDropdown/>
      </div>

      <Link to="/signIn"><button className="search-button">Search</button></Link>
    </div>
  );
};

export default FlightSearchBar;
