import React from 'react';
import { Form, Input, Select } from 'antd';
import './PassengerInfo.css';
import Button from '../Button/ButtonComp';
import { Link } from 'react-router-dom';

const { Option } = Select;

const PassengerInfo = ({ adultCount = 1 }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('All Passenger Details:', values);
    // Save to localStorage or Redux if needed
  };

  return (
    <Form
      form={form}
      name="passenger-info-form"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 600, margin: '0 auto' }}
    >
      <div className="form-header">
        <h2 className="form-title">Passenger Information</h2>
      </div>

      {[...Array(adultCount)].map((_, index) => (
        <div key={index} className="passenger-group">
          <h3 className="form-subtitle">Passenger {index + 1} (Adult)</h3>

          <Form.Item
            name={['passengers', index, 'passengerName']}
            label="Full Name"
            rules={[
              { required: true, message: 'Please enter name' },
              { min: 2, max: 50, message: 'Name must be 2 to 50 characters' }
            ]}
          >
            <Input placeholder="Full name*" />
          </Form.Item>

          <Form.Item
            name={['passengers', index, 'passengerAge']}
            label="Age"
            rules={[
              { required: true, message: 'Please enter age' },
              { type: 'number', min: 2, message: 'Minimum age is 2' }
            ]}
          >
            <Input type="number" placeholder="Age*" />
          </Form.Item>

          <Form.Item
            name={['passengers', index, 'passengerGender']}
            label="Gender"
            rules={[{ required: true, message: 'Please select gender' }]}
          >
            <Select placeholder="Gender">
              <Option value="MALE">Male</Option>
              <Option value="FEMALE">Female</Option>
              <Option value="OTHER">Other</Option>
            </Select>
          </Form.Item>
        </div>
      ))}

      {/* ✅ Buttons moved here */}
      <div className="buttons-passenger" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
        <Link to="/flights">
          <Button>Back to Flights</Button>
        </Link>
        <Link to="/seats">
          <Button>Continue to Seats</Button>
        </Link>
      </div>
    </Form>
  );
};

export default PassengerInfo;
