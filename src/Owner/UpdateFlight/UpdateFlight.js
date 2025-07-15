import React, { useEffect, useState } from 'react';
import {
  Modal,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Button,
  Typography,
  message,
} from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';
import { useLocation, useNavigate } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

const { Title } = Typography;
const API_BASE_URL = 'http://localhost:8086';

const UpdateFlight = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { flight } = location.state || {};
  const [formValues, setFormValues] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    if (flight) {
      form.setFieldsValue({
        availSeats: flight.availSeats,
        totalSeats: flight.totalSeats,
        baggage: flight.baggage,
        fare: flight.fare,
        destination: flight.destination,
        source: flight.source,
        depertureT: dayjs(flight.depertureT),
        arrivalT: dayjs(flight.arrivalT),
      });
    }
  }, [flight, form]);

  const handleSubmit = (values) => {
    setFormValues(values);
    setShowConfirmModal(true);
  };

  const confirmUpdate = async () => {
    const payload = {
      ...formValues,
      depertureT: dayjs(formValues.depertureT).format('YYYY-MM-DDTHH:mm:ss'),
      arrivalT: dayjs(formValues.arrivalT).format('YYYY-MM-DDTHH:mm:ss'),
    };

    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `${API_BASE_URL}/api/owner/flights/${flight.flightId}`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      message.success('Flight updated successfully');
      navigate('/ownerHome');
    } catch (error) {
      console.error('Error updating flight', error);
      message.error('Failed to update flight');
    } finally {
      setShowConfirmModal(false);
    }
  };

  const handleClose = () => {
    navigate('/ownerHome');
  };

  return (
    <>
      <Modal open={true} footer={null} closable={false} width={600}>
        <div style={{ position: 'relative' }}>
          <CloseOutlined
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              fontSize: '18px',
              color: '#999',
              cursor: 'pointer',
            }}
          />
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <Title level={4}>Update Flight</Title>
          </div>

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
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
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ backgroundColor: '#605DEC' }}
              >
                Update Flight
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        open={showConfirmModal}
        title="Confirm Update"
        onOk={confirmUpdate}
        onCancel={() => setShowConfirmModal(false)}
        okText="Yes"
        cancelText="No"
      >
        Are you sure you want to update this flight?
      </Modal>
    </>
  );
};

export default UpdateFlight;
