import { Layout, Button } from 'antd';
import './HeaderBefore.css';
import LogoImg from '../../images/LogoImg.png'; 

const { Header } = Layout;

const HeaderBefore = () => {
  return (
    <Header className="app-header">
      <div className="logo">
        <img src={LogoImg} alt="SimplyFly Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <a href="#" className="link">Flights</a>
        <a href="#" className="link">Sign in</a>
        <Button type="primary" className="signup-btn">Sign up</Button>
      </div>
    </Header>
  );
};

export default HeaderBefore;
