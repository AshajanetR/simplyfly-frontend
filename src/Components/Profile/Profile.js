import React, { useEffect } from 'react';
import { Form, Input, Button, Avatar, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './Profile.css';
import ProfileImg from '../../images/ProfileImg.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const API_BASE_URL = "http://localhost:8085";

const Profile = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // ✅ Redux user

  // 🔄 Fetch latest user profile data from backend
  const fetchUser = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_BASE_URL}/api/user/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedUser = response.data;
      form.setFieldsValue({
        name: updatedUser.userName,
        email: updatedUser.userEmail,
        phone: updatedUser.userContact,
      });
    } catch (err) {
      console.error("Failed to fetch profile:", err);
      message.error("Failed to fetch profile data.");
    }
  };

  useEffect(() => {
    if (user?.userId) {
      fetchUser(user.userId); 
    }
  }, [user]);

  const handleSave = async (values) => {
    if (!user?.userId) {
      message.error("User ID is missing.");
      return;
    }

    const token = localStorage.getItem("token");

    const payload = {
      userName: values.name,
      userEmail: values.email,
      userContact: values.phone,
    };

    try {
      await axios.put(
        `${API_BASE_URL}/api/user/profile/${user.userId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      message.success("Profile updated successfully!");
      fetchUser(user.userId); 
    } catch (error) {
      console.error("Update failed:", error);
      message.error("Failed to update profile.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    message.info("Logged out successfully.");
    navigate("/");
  };

  return (
    <div className="profile-form-wrapper">
      <div className="profile-form-container">
        <CloseOutlined className="close-icon" />
        <Avatar src={ProfileImg} size={100} className="profile-avatar" />

        <Form layout="vertical" className="profile-form" form={form} onFinish={handleSave}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input placeholder="Enter phone number" />
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

export default Profile;
