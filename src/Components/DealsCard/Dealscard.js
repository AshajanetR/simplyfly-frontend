import './DealsCard.css';
import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const Dealscard = ({ image, landmark, city, price, airline }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/flights?source=Chennai&destination=${encodeURIComponent(city)}`);
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
