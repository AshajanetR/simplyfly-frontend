import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Flex,
  Typography,
  Modal,
} from 'antd';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../Store/authSlice';

const { Title } = Typography;

const SignIn = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        userEmail: values.email,
        userPassword: values.password,
      });

      const token = response.data;

   
      localStorage.setItem('token', token);

      
      const decodedPayload = JSON.parse(atob(token.split('.')[1]));

     
      dispatch(setUser(decodedPayload));

      console.log('Login successful:', decodedPayload);
      alert('Login successful!');

      
      if (decodedPayload.userType === 'OWNER') {
        nav('/ownerhome');
      }else if(decodedPayload.userType === 'ADMIN'){
        nav('/adminhome')
      }
      else {
        nav('/Home'); 
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password!');
    }
  };

  return (
    <Modal open={true} footer={null}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Title level={4}>Sign in to SimplyFly</Title>
      </div>

      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="" style={{ color: '#605DEC' }}>
              Forgot password
            </a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: '#605DEC' }}
          >
            Log In
          </Button>
          or{' '}
          <Link to="/signUp" style={{ color: '#605DEC' }}>
            Register now!
          </Link>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignIn;