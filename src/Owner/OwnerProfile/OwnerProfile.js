import React, { useEffect } from 'react';
import { Form, Input, Button, Avatar, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './OwnerProfile.css';
import ProfileImg from '../../images/ProfileImg.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const API_BASE_URL = "http://localhost:8086";

const OwnerProfile = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const fetchOwner = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/api/user/owner-profile/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const owner = response.data;

      form.setFieldsValue({
        name: owner.userName || '',
        email: owner.userEmail || '',
        phone: owner.userContact || '',
        airlineName: owner.airlineName || '',
        licenseNumber: owner.licenseNumber || '',
      });
    } catch (err) {
      console.error("Failed to fetch owner profile:", err);
      message.error("Failed to fetch owner profile.");
    }
  };

  useEffect(() => {
    if (user?.userId) {
      fetchOwner(user.userId);
    }
  }, [user]);

  const updateProfile = async (values) => {
    const token = localStorage.getItem("token");

    const payload = {
      userName: values.name,
      userEmail: values.email,
      userContact: values.phone,
    };

    try {
      await axios.put(`${API_BASE_URL}/api/user/profile/${user.userId}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      message.success("Profile updated successfully!");
      navigate("/ownerHome"); // ✅ Navigate after success
    } catch (error) {
      console.error("Update failed:", error);
      message.error("Failed to update profile.");
    }
  };

  const handleSave = (values) => {
    const confirm = window.confirm("Are you sure you want to update your profile details?");
    if (confirm) {
      updateProfile(values);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    message.info("Logged out successfully.");
    navigate("/");
  };

  const handleClose = () => {
    navigate("/ownerHome");
  };

  return (
    <div className="profile-form-wrapper">
      <div className="profile-form-container">
        <CloseOutlined className="close-icon" onClick={handleClose} />
        <Avatar src={ProfileImg} size={100} className="profile-avatar" />

        <Form layout="vertical" className="profile-form" form={form} onFinish={handleSave}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input />
          </Form.Item>

          <Form.Item name="airlineName" label="Airline Name">
            <Input disabled />
          </Form.Item>

          <Form.Item name="licenseNumber" label="License Number">
            <Input disabled />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className="save-button">
              Save
            </Button>
          </Form.Item>

          <Form.Item>
            <Button danger block onClick={handleLogout}>
              Logout
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default OwnerProfile;
