import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const Dealscard = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://images.unsplash.com/photo-1492136344046-866c85e0bf04?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src='../logo192.png'
        style={{
          height: '300px', // Fixed height
          width: '100%',   // Full card width
          objectFit: 'cover', // Crop and center image nicely
        }}
      />
    }
   
  >
    
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{color : '#605DEC'}}><span style={{color : '#7C8DB0'}}>Eiffel Tower,</span> Paris</span>
        <span style={{color : '#7C8DB0'}}>15,000 Rs</span>
    </div>
    <span style={{color : '#7C8DB0', fontWeight: 'lighter'}}>Indigo Airlines</span>
    
  </Card>
);
export default Dealscard;