import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography, Modal, Select, message } from 'antd';
import { useDispatch } from 'react-redux';
import { signupSuccess } from '../../Store/signupSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {API_BASE_URL} from '../../apiConfig'
const { Option } = Select;
const { Title } = Typography;

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const payload = {
      userName: values.username,
      userEmail: values.email,
      userPwd: values.password,
      userContact: values.contact,
      userType: values.role
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/register`, payload);
      dispatch(signupSuccess(response.data)); // Save user to Redux
      message.success('Account created successfully!');
      navigate('/signIn'); // Redirect to login
    } catch (error) {
      message.error('Signup failed. Try again.');
      console.error("Sign up failed",error.message);
    }
  };

  return (
    <Modal open={true} footer={null}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Title level={4}>Sign up for SimplyFly</Title>
      </div>

      <Form name="signup" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="role"
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
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="cpassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) return Promise.resolve();
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item
          name="contact"
          rules={[{ required: true, message: 'Please enter contact number' }]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="Contact number" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" style={{ backgroundColor: '#605DEC' }}>
            Create Account
          </Button>
          or <Link to="/signIn" style={{ color: '#605DEC' }}>Login now!</Link>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUp;
