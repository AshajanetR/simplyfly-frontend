// src/components/HeaderAfterLogin.js
import React from 'react';
import { Layout, Avatar } from 'antd';
import './HeaderAfter.css';
import LogoImg from '../../images/LogoImg.png';
import ProfileImg from '../../images/ProfileImg.jpg';

const { Header } = Layout;

const HeaderAfter = () => {
  return (
    <Header className="app-header">
      <div className="logo">
        <img src={LogoImg} alt="SimplyFly Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <a href="#" className="link">Flights</a>
        <a href="#" className="link">My trips</a>
        <Avatar src={ProfileImg} size="large" />
      </div>
    </Header>
  );
};

export default HeaderAfter;
