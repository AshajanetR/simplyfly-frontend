import React, { useEffect, useState } from 'react';
import OwnerFlightCard from '../../Owner/OwnerFlightCard/OwnerFlightCard';
import OwnerHeader from '../../Owner/OwnerHeader/OwnerHeader';
import FromDropdown from '../../Owner/FromDropdown/FromDropdown';
import ToDropdown from '../../Owner/ToDropdown/ToDropdown';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { message, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import './OwnerHome.css';

const API_BASE_URL = 'http://localhost:8085';

const OwnerHome = () => {
  const user = useSelector((state) => state.auth.user);
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchClicked, setSearchClicked] = useState(false);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [flightToDelete, setFlightToDelete] = useState(null); 
  const [confirmVisible, setConfirmVisible] = useState(false); 
  const navigate = useNavigate();

  const fetchFlights = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/api/owner/flights/${user.userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFlights(response.data);
      setFilteredFlights(response.data); 
    } catch (err) {
      console.error("Error fetching flights", err);
      message.error("Failed to load your flights");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.userId) {
      fetchFlights();
    }
  }, [user]);

  const handleSearch = () => {
    setSearchClicked(true);
    if (!from && !to) {
      setFilteredFlights(flights);
      return;
    }

    const filtered = flights.filter(flight =>
      (!from || flight.source === from) &&
      (!to || flight.destination === to)
    );
    setFilteredFlights(filtered);
  };

  const handleUpdate = (flight) => {
    navigate(`/update-flight/${flight.flightId}`, { state: { flight } });
  };

  const handleView = (flight) => {
    navigate(`/viewFlight/${flight.flightId}`, { state: { flight } });
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/api/owner/flights/${flightToDelete.flightId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const updatedFlights = flights.filter(f => f.flightId !== flightToDelete.flightId);
      setFlights(updatedFlights);
      setFilteredFlights(prev => prev.filter(f => f.flightId !== flightToDelete.flightId));
      message.success("Flight deleted successfully");
    } catch (err) {
      console.error("Delete error", err);
      message.error("Failed to delete flight");
    } finally {
      setConfirmVisible(false);
    }
  };

  const handleDelete = (flight) => {
    setFlightToDelete(flight);
    setConfirmVisible(true);
  };

  return (
    <div>
      <OwnerHeader />
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Your Flights</h2>

      
      <div className="search-bar-wrapper">
        <FromDropdown value={from} onChange={setFrom} />
        <ToDropdown value={to} onChange={setTo} />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      
      <div style={{ padding: "20px" }}>
        {loading ? (
          <p style={{ textAlign: "center", color: "#999" }}>Loading flights...</p>
        ) : filteredFlights.length === 0 ? (
          <p style={{ textAlign: "center", color: "#999" }}>No flights found</p>
        ) : (
          filteredFlights.map(flight => (
            <OwnerFlightCard
              key={flight.flightId}
              flight={flight}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onView={handleView}
            />
          ))
        )}
      </div>

      
      <Modal
        open={confirmVisible}
        title="Confirm Delete"
        onOk={confirmDelete}
        onCancel={() => setConfirmVisible(false)}
        okText="Yes, Delete"
        cancelText="Cancel"
      >
        Are you sure you want to delete this flight?
      </Modal>
    </div>
  );
};

export default OwnerHome;
