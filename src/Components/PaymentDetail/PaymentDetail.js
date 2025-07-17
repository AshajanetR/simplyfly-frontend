import React from 'react'
import './PaymentDetail.css'
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const PaymentDetail = () => {
  return (
  <div className='payment-container'>
    <div className='payment'>
      <h1>Payment method</h1>  
      <button>💳 Credit Card</button>
    </div>

      <Form
          name="complex-form"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 1200 }}
          className='payment-form'
        >
          <Form.Item  className="form-inline-group">
            
              <Form.Item>
                  
                  <Checkbox>
                      Billing address is same as Passenger 1
                  </Checkbox>
              </Form.Item>
            <Form.Item
              name="customerName"
              rules={[{ required: true, message: 'Required' }]}
              className="inline-input-3"
            >
              <Input placeholder="Name Of Customer*" />
            </Form.Item>
            
          
          </Form.Item>

          <Form.Item  className="form-inline-group">
            <Form.Item
              name="sufix"
              rules={[{ required: true, message: 'Required'  }]}
              className="inline-input-2"
            >
              <Input placeholder="Credit Card Number*" />
            </Form.Item>
          
          </Form.Item>


          <Form.Item className="form-inline-group">
            <Form.Item
              name="expiryDate"
              rules={[{ required: true, message: 'Required'  }]}
              className="inline-input-4"
            >
              <Input placeholder="Expiry Date(MM/YY)**" />
            </Form.Item>
            <Form.Item
              name="cvv"
              rules={[{ required: true }]}
              className="inline-input-4 margin"
            >
              <Input placeholder="CVV*" />
            </Form.Item>
          </Form.Item>
          
        </Form>

    </div>
  )
}

export default PaymentDetail
