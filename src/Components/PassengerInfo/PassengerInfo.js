import React from 'react';
import { Button, Form, Input } from 'antd';
import './PassengerInfo.css';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const PassengerInfo = () => (
  <Form
    name="passenger-info-form"
    onFinish={onFinish}
    layout="vertical"
    style={{ maxWidth: 600, margin: '0 auto' }}
  >
    <div className="form-header">
      <h2 className="form-title">Passenger information</h2>
      <p className="form-subtitle">Passenger 1 (Adult)</p>
    </div>

    {/* Row 1 - 3 fields */}
    <div className="form-row row-3">
      <Form.Item name="firstName" rules={[{ required: true }]} className="form-item">
        <Input placeholder="First name*" />
      </Form.Item>
      <Form.Item name="middleName" className="form-item">
        <Input placeholder="Middle" />
      </Form.Item>
      <Form.Item name="lastName" rules={[{ required: true }]} className="form-item">
        <Input placeholder="Last name*" />
      </Form.Item>
    </div>

    {/* Row 2 - 2 fields */}
    <div className="form-row row-2">
      <Form.Item name="suffix" className="form-item">
        <Input placeholder="Suffix" />
      </Form.Item>
      <Form.Item name="birthdate" rules={[{ required: true }]} className="form-item">
        <Input placeholder="Date of birth*" />
        <div className="form-hint">MM/DD/YY</div>
      </Form.Item>
    </div>

    {/* Row 3 - 2 fields */}
    <div className="form-row row-2">
      <Form.Item name="email" rules={[{ required: true }]} className="form-item">
        <Input placeholder="Email address*" />
      </Form.Item>
      <Form.Item name="phoneno" rules={[{ required: true }]} className="form-item">
        <Input placeholder="Phone number*" />
      </Form.Item>
    </div>

    {/* Row 4 - 2 fields */}
    <div className="form-row row-2">
      <Form.Item name="redressno" className="form-item">
        <Input placeholder="Redress number" />
      </Form.Item>
      <Form.Item name="ktphone" rules={[{ required: true }]} className="form-item">
        <Input placeholder="Known traveller number*" />
      </Form.Item>
    </div>

   
  </Form>
);

export default PassengerInfo;
