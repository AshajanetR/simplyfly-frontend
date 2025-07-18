import React, { useEffect } from 'react';
import { Form, Input, Button, Avatar, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './AdminProfile.css';
import ProfileImg from '../../images/ProfileImg.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../../apiConfig';

const AdminProfile = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const fetchAdmin = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/api/user/getAdmin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const admin = response.data;
      form.setFieldsValue({
        name: admin.userName || '',
        email: admin.userEmail || '',
        phone: admin.userContact || '',
        uniqueId: admin.uniqueId || '',
      });
    } catch (err) {
      console.error("Failed to fetch admin profile:", err);
      message.error("Failed to fetch admin profile.");
    }
  };

  useEffect(() => {
    if (user?.userId) {
      fetchAdmin(user.userId);
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
        headers: { Authorization: `Bearer ${token}` },
      });

      message.success("Profile updated successfully!");
      navigate("/adminhome");
    } catch (error) {
      console.error("Update failed:", error);
      message.error("Failed to update profile.");
    }
  };

  const handleSave = (values) => {
    const confirm = window.confirm("Are you sure you want to update your profile?");
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
    navigate("/adminhome");
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

          <Form.Item name="uniqueId" label="Unique Admin ID">
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

export default AdminProfile;
