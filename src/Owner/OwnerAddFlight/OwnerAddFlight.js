import React, { useEffect, useState } from 'react';
import {
  Modal,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Button,
  Typography,
  message
} from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

const { Title } = Typography;

const API_BASE_URL = "http://localhost:8085";

const OwnerAddFlight = () => {
  const user = useSelector((state) => state.auth.user);
  const [form] = Form.useForm();
  const [airlineName, setAirlineName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOwnerAirline = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_BASE_URL}/api/user/owner-profile/${user.userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data)
        setAirlineName(response.data.airlineName);
      } catch (error) {
        message.error("Failed to fetch airline name");
        console.error(error);
      }
    };

    if (user?.userId) {
      fetchOwnerAirline();
    }
  }, [user]);

  const handleSubmit = async (values) => {
    const payload = {
      ...values,
      ownerId: user.userId,
      airlineName: airlineName,
      depertureT: values.depertureT.toISOString(),
      arrivalT: values.arrivalT.toISOString(),
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post(`${API_BASE_URL}/api/flights/addFlight`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      message.success("Flight added successfully!");
      navigate("/ownerHome");
    } catch (error) {
      console.error("Error adding flight:", error);
      message.error("Failed to add flight");
    }
  };

  const handleClose = () => {
    navigate('/ownerHome');
  };

  return (
    <Modal open={true} footer={null} closable={false} width={600}>
      <div style={{ position: 'relative' }}>
        {/* Close icon */}
        <CloseOutlined
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            fontSize: '18px',
            color: '#999',
            cursor: 'pointer'
          }}
        />

        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Title level={4}>Add a New Flight</Title>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          initialValues={{
            flightNumber: 'SF101',
            availSeats: 120,
            totalSeats: 150,
            baggage: '20kg',
            fare: 4999,
            destination: 'Delhi',
            source: 'Mumbai',
            depertureT: dayjs('2025-08-10T14:30'),
            arrivalT: dayjs('2025-08-10T17:45'),
          }}
        >
          <Form.Item name="flightNumber" label="Flight Number" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Airline Name">
            <Input value={airlineName} disabled />
          </Form.Item>

          <Form.Item name="source" label="Source" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="destination" label="Destination" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="depertureT" label="Departure Time" rules={[{ required: true }]}>
            <DatePicker showTime style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="arrivalT" label="Arrival Time" rules={[{ required: true }]}>
            <DatePicker showTime style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="availSeats" label="Available Seats" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="totalSeats" label="Total Seats" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="fare" label="Fare (₹)" rules={[{ required: true }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="baggage" label="Baggage Info" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" style={{ backgroundColor: '#605DEC' }}>
              Add Flight
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default OwnerAddFlight;
