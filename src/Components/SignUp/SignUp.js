import React, { useState } from 'react';
import {
  LockOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Typography,
  Modal,
  Select,
  message,
} from 'antd';
import { useDispatch } from 'react-redux';
import { signupSuccess } from '../../Store/signupSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../apiConfig';

const { Option } = Select;
const { Title } = Typography;

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [ownerForm] = Form.useForm();
  const [adminForm] = Form.useForm();

  const [ownerModalVisible, setOwnerModalVisible] = useState(false);
  const [adminModalVisible, setAdminModalVisible] = useState(false);
  const [userPayload, setUserPayload] = useState(null);
  const [createdUserId, setCreatedUserId] = useState(null);

  const onFinish = (values) => {
    const payload = {
      userName: values.username,
      userEmail: values.email,
      userPwd: values.password,
      userContact: values.contact,
      userType: values.role,
    };

    if (values.role === 'OWNER') {
      setUserPayload(payload);
      setOwnerModalVisible(true);
    } else if (values.role === 'ADMIN') {
      setUserPayload(payload);
      setAdminModalVisible(true);
    } else {
      registerUser(payload);
    }
  };

  const registerUser = async (payload, ownerData = null, extraData = null) => {
    try {
      const userResponse = await axios.post(
        `${API_BASE_URL}/api/auth/register`,
        payload
      );

      console.log("Payload", payload);
      console.log("Extra data", extraData);

      const savedUser = userResponse.data;
      setCreatedUserId(savedUser.userId);

      if (payload.userType === 'OWNER' && ownerData) {
        await axios.post(`${API_BASE_URL}/api/auth/register-owner`, {
          airlineName: ownerData.airlineName,
          licenseNumber: ownerData.licenseNumber,
          userId: savedUser.userId,
        });
      }

      if (payload.userType === 'ADMIN' && extraData) {
        try {
          await axios.post(`${API_BASE_URL}/api/auth/admin-register`, {
            uniqueId: extraData.uniqueId,
            userId: savedUser.userId,
          });
        } catch (error) {
          alert("Can't register admin");
          console.log("Admin register error", error);
        }
      }

      dispatch(signupSuccess(savedUser));
      message.success('Account created successfully!');
      navigate('/signIn');
    } catch (error) {
      console.error('Signup error:', error);
      message.error('Signup failed. Please try again.');
    }
  };

  const handleOwnerSubmit = () => {
    ownerForm.validateFields().then((values) => {
      setOwnerModalVisible(false);
      registerUser(userPayload, values);
    });
  };

  const handleAdminSubmit = () => {
    adminForm.validateFields().then((values) => {
      setAdminModalVisible(false);
      registerUser(userPayload, null, values);
    });
  };

  return (
    <>
      
      <Modal open={true} footer={null}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <Title level={4}>Sign up for SimplyFly</Title>
        </div>

        <Form form={form} name="signup" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: 'Please select a role!' }]}
          >
            <Select placeholder="Select a role">
              <Option value="USER">User</Option>
              <Option value="ADMIN">Admin</Option>
              <Option value="OWNER">Owner</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="cpassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item
            name="contact"
            label="Contact Number"
            rules={[{ required: true, message: 'Please enter contact number' }]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Contact number" />
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: '#605DEC' }}
            >
              Create Account
            </Button>
            or{' '}
            <Link to="/signIn" style={{ color: '#605DEC' }}>
              Login now!
            </Link>
          </Form.Item>
        </Form>
      </Modal>

     
      <Modal
        title="Owner Registration"
        open={ownerModalVisible}
        onCancel={() => setOwnerModalVisible(false)}
        onOk={handleOwnerSubmit}
        okText="Submit"
      >
        <Form form={ownerForm} layout="vertical">
          <Form.Item
            name="airlineName"
            label="Airline Name"
            rules={[{ required: true, message: 'Airline name is required' }]}
          >
            <Input placeholder="Enter airline name" />
          </Form.Item>

          <Form.Item
            name="licenseNumber"
            label="License Number"
            rules={[
              { required: true, message: 'License number is required' },
              {
                pattern: /^\d{10}$/,
                message: 'License number must be exactly 10 digits',
              },
            ]}
          >
            <Input maxLength={10} placeholder="Enter 10-digit license number" />
          </Form.Item>
        </Form>
      </Modal>

      
      <Modal
        title="Admin Registration"
        open={adminModalVisible}
        onCancel={() => setAdminModalVisible(false)}
        onOk={handleAdminSubmit}
        okText="Submit"
      >
        <Form form={adminForm} layout="vertical">
          <Form.Item
            name="uniqueId"
            label="Unique ID"
            rules={[
              { required: true, message: 'Unique ID is required' },
              { min: 5, message: 'Unique ID must be at least 5 characters' },
            ]}
          >
            <Input placeholder="Enter unique admin ID" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SignUp;
