import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, IdcardOutlined } from '@ant-design/icons';
import './OwnerInfoCard.css';

const { Title, Text } = Typography;

const OwnerInfoCard = ({ owner }) => {
  return (
    <Card className="owner-card" hoverable>
      <div className="owner-card-content">
        <Avatar size={80} style={{ backgroundColor: '#5a67d8' }}>
          {owner.userName.charAt(0).toUpperCase()}
        </Avatar>
        <div className="owner-details">
          <Title level={4} className="owner-name">{owner.userName}</Title>
          <Text><MailOutlined /> {owner.userEmail}</Text>
          <Text><PhoneOutlined /> {owner.userContact}</Text>
          <Text><IdcardOutlined /> Airline: {owner.airlineName}</Text>
          <Text><IdcardOutlined /> License: {owner.licenseNumber}</Text>
        </div>
      </div>
    </Card>
  );
};

export default OwnerInfoCard;
