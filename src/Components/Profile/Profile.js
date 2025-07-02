import React, { useState } from 'react';
import { Form, Input, Button, Avatar } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './Profile.css';
import ProfileImg from '../../images/ProfileImg.jpg';

const Profile = () => {
  const handleClose = () => {
    console.log('Close clicked');
  };

  const [form] = Form.useForm();

  const initialValues = {
    name: 'Sai Harshal Jog',
    email: 'saijog66@gmail.com',
  };

  const handleSave = (values) => {
    alert(`Updated Profile Data:\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <div className="profile-form-wrapper">
      <div className="profile-form-container">
        <CloseOutlined className="close-icon" onClick={handleClose} />

        <Avatar src={ProfileImg} size={100} className="profile-avatar" />

        <Form
          layout="vertical"
          className="profile-form"
          form={form}
          initialValues={initialValues}
          onFinish={handleSave}
        >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Input placeholder="Enter gender" />
          </Form.Item>

          <Form.Item name="age" label="Age">
            <Input placeholder="Enter age" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className="save-button">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
