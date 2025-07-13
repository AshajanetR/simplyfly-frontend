import { Layout, Button } from 'antd';
import './HeaderBefore.css';
import LogoImg from '../../images/LogoImg.png'; 
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderBefore = () => {
  return (
    <Header className="app-header">
      <div className="logo">
        <img src={LogoImg} alt="SimplyFly Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <Link to="/signIn" className="link">Flights</Link>
        <Link to="/signIn"><Button type="primary" className="signup-btn">Sign In</Button></Link>
        <Link to="/signUp"><Button type="primary" className="signup-btn">Sign up</Button></Link>
      </div>
    </Header>
  );
};

export default HeaderBefore;
