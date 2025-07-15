import React, { useEffect, useState } from 'react';
import { Card, Typography, Row, Col, Divider, Space } from 'antd';
import './FlightSummaryCard.css';
import { useLocation } from 'react-router-dom';

const { Text } = Typography;

const FlightSummaryCard = ({getAmt}) => {
  const location = useLocation();
  const [flight, setFlight] = useState(null);
  const [adults, setAdults] = useState(1); // default
  const [name, setName] = useState('');

  useEffect(() => {
  const flightData = location.state;

  if (flightData?.flight) {
    setFlight(flightData.flight);
    setAdults(flightData.adults || 1);
  } else {
    const stored = localStorage.getItem("flightSearch");
    if (stored) {
      const parsed = JSON.parse(stored);
      const result = parsed.response?.[0];
      const adultCount = parsed.request?.adults || 1;

      setFlight(result);
      setAdults(adultCount);
    }
  }
}, []); // ✅ FIXED: Empty dependency array


  useEffect(() => {
    if (flight?.flightNumber?.includes('AI')) {
      setName('Air India');
    } else if (flight?.flightNumber?.includes('ID')) {
      setName('Indigo Airlines');
    } else if (flight?.flightNumber) {
      setName('Unknown Airline');
    }
  }, [flight]);

  if (!flight) {
    return <p style={{ color: 'red' }}>Flight information not available.</p>;
  }

  const number = flight.flightNumber;
  const fare = flight.fare * adults;
  const fname = flight.airlineName;
  getAmt(fare)

  return (
    <Card className="flight-card2" bordered>
      <Row justify="space-between" align="middle">
        <Col>
          <Space align="start">
            <div className="emoji-logo">🛫</div>
            <div>
              <Text strong>{fname}</Text>
              <br />
              <Text type="secondary" className="flight-code">{number}</Text>
            </div>
          </Space>
        </Col>

        <Col className="flight-time">
          <Text strong>16h 45m (+1d)</Text>
          <br />
          <Text>7:00 AM - 4:15 PM</Text>
          <br />
          <Text type="secondary" className="layover">2h 45m in HNL</Text>
        </Col>
      </Row>

      <Divider />

      <Row justify="end" className="price-breakdown">
        <Col span={12}>
          <Row justify="space-between">
            <Text>Subtotal</Text>
            <Text strong>₹{fare}</Text>
          </Row>
          <Row justify="space-between">
            <Text>Taxes and Fees</Text>
            <Text strong>₹121</Text>
          </Row>
          <Row justify="space-between">
            <Text strong>Total</Text>
            <Text strong>₹{fare + 121}</Text>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default FlightSummaryCard;
