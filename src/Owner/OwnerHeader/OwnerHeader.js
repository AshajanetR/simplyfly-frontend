import { Layout, Avatar } from 'antd';
import './OwnerHeader.css';
import LogoImg from '../../images/LogoImg.png';
import ProfileImg from '../../images/ProfileImg.jpg';
import { Link, useNavigate } from 'react-router-dom';

const { Header } = Layout;

const OwnerHeader = () => {
  const navigate = useNavigate();

  const goToOwnerProfile = () => {
    navigate('/ownerProfile');
  };

  return (
    <Header className="app-header">
      <div className="logo">
        <img src={LogoImg} alt="SimplyFly Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <Link to="/addFlight" className="link">Add a flight</Link>
        <Avatar 
          src={ProfileImg} 
          size="large" 
          onClick={goToOwnerProfile} 
          style={{ cursor: 'pointer' }} 
        />
      </div>
    </Header>
  );
};

export default OwnerHeader;
