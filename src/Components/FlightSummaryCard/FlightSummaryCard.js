import React from 'react';
import { Card, Typography, Row, Col, Divider, Space, Image } from 'antd';
import './FlightSummaryCard.css';

const { Text, Title } = Typography;

const FlightSummaryCard = () => {
  return (
    <Card className="flight-card" bordered>
      <div>
        <Row justify="space-between" align="middle">
        <Col>
          <Space align="start">
             <div className="emoji-logo">🛫</div>
            <div>
              <Text strong>Hawaiian Airlines</Text>
              <br />
              <Text type="secondary" className="flight-code">FIG4312</Text>
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
      </div>

      <Divider />

      <Row justify="end" className="price-breakdown">
        <Col span={12}>
          <Row justify="space-between">
            <Text>Subtotal</Text>
            <Text strong>$503</Text>
          </Row>
          <Row justify="space-between">
            <Text>Taxes and Fees</Text>
            <Text strong>$121</Text>
          </Row>
          <Row justify="space-between">
            <Text strong>Total</Text>
            <Text strong>$624</Text>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default FlightSummaryCard;
