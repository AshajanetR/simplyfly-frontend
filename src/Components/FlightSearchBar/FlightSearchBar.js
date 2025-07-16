import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUser } from "react-icons/fa";
import "./FlightSearchBar.css";
import { useNavigate } from "react-router-dom";
import FromDropdown from "../FromDropdown/FromDropdown";
import ToDropdown from "../ToDropdown/ToDropdown";
import DateDropdown from "../DateDropdown/DateDropdown";
import AdultDropdown from "../AdultDropdown/AdultDropdown";
import { useSelector } from "react-redux";
import { API_BASE_URL } from '../../apiConfig';
import dayjs from 'dayjs';

const FlightSearchBar = ({ onSearchComplete }) => {
  const navigate = useNavigate();
  const { from, to, date, adults, minors } = useSelector((state) => state.flight);

  const handleSearch = async () => {
    const token = localStorage.getItem("token");
    if(!token) {
      navigate("/signIn");
      return
    }
    console.log(date)

    const formattedDeparture = date?.depart
      ? dayjs(date.depart).format("YYYY-MM-DDTHH:mm:ss")
      : null;

    const arrival = dayjs("2025-08-10 12:15:00.000000").format("YYYY-MM-DDTHH:mm:ss");

    const data = {
      source: from,
      destination: to,
      depertureT: formattedDeparture,
      arrivalT: arrival,
      adults,
      minors
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/flights/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      const text = await response.text();
      const result = text ? JSON.parse(text) : [];

      // ✅ Store search result in localStorage
      localStorage.setItem("flightSearch", JSON.stringify({ request: data, response: result }));

      console.log("Stored search:", { request: data, response: result });

      // ✅ Notify parent if needed
      if (onSearchComplete) {
        onSearchComplete(result);
      }

      // ✅ Optional navigation (parent can skip this if already on /flights)
      navigate("/flights");
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="search-bar">
      <div className="input-group">
        <FromDropdown />
      </div>

      <div className="input-group">
        <ToDropdown />
      </div>

      <div className="input-group">
        <DateDropdown />
      </div>

      <div className="input-group">
        <AdultDropdown />
      </div>

      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FlightSearchBar;
