import React from 'react';
import { Layout } from 'antd';
import './FooterApp.css'
import logo from '../../images/LogoImg.png';
const { Footer } = Layout;


const FooterApp = () => {
  return (
    <Footer className="footer-container">
      
      <div className="footer-logo">
        <img src={logo} alt='SimplyFly Logo'/>

      </div>

      <div>
        <li>About</li>
        <li>About SimplyFly</li>
        <li>How it works</li>
        <li>Blog</li>
      </div>

      <div>
        <li>Support</li>
        <li>Help centre</li>
        <li>Contact us</li>
        <li>Privacy Policy</li>
      </div>

      <div>
        <li>Follow us</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Facebook</li>
      </div>

    </Footer>
  );
};

export default FooterApp;
