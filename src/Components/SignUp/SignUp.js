
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex,Typography, Modal } from 'antd';
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
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" style={{backgroundColor : '#605DEC'}}>
          Create Account
        </Button>
        or <a href="" style={{color : '#605DEC'}}>Login now!</a>
      </Form.Item>
    </Form>
    </Modal>
  );
};
export default SignUp;