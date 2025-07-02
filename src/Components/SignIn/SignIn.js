import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex,Typography, Modal } from 'antd';
// import Title from 'antd/es/skeleton/Title';
const { Title } = Typography;
const SignIn = () => {
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
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox >Remember me</Checkbox>
          </Form.Item>
          <a href="" style={{color : '#605DEC'}}>Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" style={{backgroundColor : '#605DEC'}}>
          Log In
        </Button>
        or <a href="" style={{color : '#605DEC'}}>Register now!</a>
      </Form.Item>
    </Form>
    </Modal>
  );
};
export default SignIn;