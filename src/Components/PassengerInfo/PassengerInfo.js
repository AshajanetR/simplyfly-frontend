import React from 'react';
import { Form, Input, InputNumber, Select, Button } from 'antd';
import './PassengerInfo.css';
// import Button from '../Button/ButtonComp';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPassengers } from '../../Store/passengerSlice';

const { Option } = Select;

const PassengerInfo = ({ adultCount  }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const onFinish = (values) => {
    alert("Passenger added")
    console.log('All Passenger Details:', values);
    localStorage.setItem('passengerInfo', JSON.stringify(values.passengers));
    dispatch(setPassengers(values.passengers));
    navigate('/seats')
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
            <InputNumber placeholder="Age*" />
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

      <Button type="primary" htmlType="submit">Add</Button>
      
    </Form>
  );
};

export default PassengerInfo;
