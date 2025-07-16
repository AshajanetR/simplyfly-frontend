import React, { useEffect, useState } from 'react';
import AdminFlightCard from '../AdminFlightCard/AdminFlightCard';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import AdminHeader from '../AdminHeader/AdminHeader';
import FromDropdown from '../../Owner/FromDropdown/FromDropdown';
import ToDropdown from '../../Owner/ToDropdown/ToDropdown';
import './AdminHome.css';

const AdminHome = () => {
  const user = useSelector((state) => state.auth.user);
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const fetchFlights = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${API_BASE_URL}/api/getAllFlight`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFlights(response.data);
      setFilteredFlights(response.data);
      message.success('Flights fetched successfully');
    } catch (error) {
      message.error('Failed to fetch flights');
      console.error('Error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleSearch = () => {
    if (!from && !to) {
      setFilteredFlights(flights);
      return;
    }

    const result = flights.filter((flight) =>
      (!from || flight.source === from) &&
      (!to || flight.destination === to)
    );

    setFilteredFlights(result);
  };

  return (
    <div>
      <AdminHeader />
      <div className="admin-home-container">
        <h1 className="admin-home-title">Admin Home</h1>

        {/* Search Filters */}
        <div className="search-bar-wrapper">
          <FromDropdown value={from} onChange={setFrom} />
          <ToDropdown value={to} onChange={setTo} />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>

        {loading ? (
          <p className="flight-status-message">Loading flights...</p>
        ) : filteredFlights.length === 0 ? (
          <p className="flight-status-message">No flights found</p>
        ) : (
          <div >
            {filteredFlights.map((flight) => (
              <AdminFlightCard key={flight.flightId} flight={flight} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
