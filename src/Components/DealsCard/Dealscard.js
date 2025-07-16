import './DealsCard.css';
import React from 'react';
import { Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';

const { Meta } = Card;

const Dealscard = ({ image, landmark, city, price, airline }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signIn');
      return;
    }

    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/flights/destination/${encodeURIComponent(city)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const flightData = response.data;

      const searchPayload = {
        request: {
          source: 'Mumbai', // default or configurable
          destination: city,
          adults: 1
        },
        response: flightData
      };

      localStorage.setItem('flightSearch', JSON.stringify(searchPayload));
      navigate('/flights');
    } catch (error) {
      console.error('Error fetching flights:', error);
      message.error('No flights found for this destination.');
    }
  };

  return (
    <Card
      style={{ width: 300, cursor: 'pointer' }}
      cover={
        <img
          alt={landmark}
          src={image}
          className="deal-card-image"
        />
      }
      onClick={handleClick}
      hoverable
    >
      <div className="deal-card-top">
        <span className="deal-location">
          <span className="deal-landmark">{landmark},</span> {city}
        </span>
        <span className="deal-price">{price}</span>
      </div>
      <span className="deal-airline">{airline}</span>
    </Card>
  );
};

export default Dealscard;
