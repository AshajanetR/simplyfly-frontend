import React from 'react';
import { Typography } from 'antd';
import './BookingConfirmation.css';

const { Title, Text } = Typography;

const BookingConfirmation = () => {
  return (
    <div className="booking-confirmation">
      <Title level={4} style={{ color: '#5a67d8',fontSize:30, marginBottom: 20 }}>
        Your booking has been confirmed!
      </Title>


      <Text className="confirmation-number">
        Confirmation number: <strong>#381029404387</strong>
      </Text>

      <Text className="thank-you-text">
        Thank you for booking your travel with Simplyfly!
      </Text>
    </div>
  );
};

export default BookingConfirmation;
