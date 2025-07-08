
import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex,Typography, Modal, Select } from 'antd';
const { Option } = Select;
const { Title } = Typography;
const SignUp = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <Modal
    open="true"
    footer={null}>
    <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Title level={4}>Sign up for SimplyFly</Title>
      </div>
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      
    >
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
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        {/* <Input prefix={<UserOutlined />} placeholder="Role" /> */}
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
        rules={[{ required: true, message: 'Please confirm password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item
        name="contact"
        rules={[{ required: true, message: 'Please enter contact number' }]}
      >
        <Input prefix={<PhoneOutlined />} type="password" placeholder="Contact number" />
      </Form.Item>
      

      <Form.Item>
        <Button block type="primary" htmlType="submit" style={{backgroundColor : '#605DEC', color : '#fff'}}>
          Create Account
        </Button>
        or <a href="" style={{color : '#605DEC'}}>Login now!</a>
      </Form.Item>
    </Form>
    </Modal>
  );
};
export default SignUp;