import './DealsCard.css'
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Dealscard = ({image,landmark,city,price,airline}) => (
  <Card
  style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={image}
        // src='../logo192.png'
        className="deal-card-image"
      />
    }
   
  >
    
    <div className="deal-card-top">
        <span className="deal-location"><span className="deal-landmark">{landmark},</span> {city}</span>
        <span className="deal-price">{price} Rs</span>
    </div>
    <span className="deal-airline">{airline}</span>
    
  </Card>
);
export default Dealscard;