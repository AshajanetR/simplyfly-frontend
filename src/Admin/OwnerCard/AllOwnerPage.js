import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OwnerInfoCard from './OwnerInfoCard';
import { API_BASE_URL } from '../../apiConfig';
import { Typography, Spin, message } from 'antd';
import OwnerHeader from '../../Owner/OwnerHeader/OwnerHeader';
import AdminHeader from '../AdminHeader/AdminHeader';

const { Title } = Typography;

const AllOwnerPage = () => {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOwners = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/getOwners`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOwners(response.data);
      console.log("Owner data",response.data)
    } catch (error) {
      console.error('Error fetching owners:', error);
      message.error('Failed to load owner data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOwners();
  }, []);

  return (
    <div>
      <AdminHeader/>
      <div style={{ padding: '2rem' }}>
      <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        All Registered Airline Owners
      </Title>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Spin size="large" />
        </div>
      ) : owners.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999' }}>No owners found.</p>
      ) : (
        owners.map((owner, index) => (
          <OwnerInfoCard key={index} owner={owner} />
        ))
      )}
    </div>
    </div>
  );
};

export default AllOwnerPage;
