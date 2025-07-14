import { Layout, Avatar } from 'antd';
import './HeaderAfter.css';
import LogoImg from '../../images/LogoImg.png';
import ProfileImg from '../../images/ProfileImg.jpg';
import { Link, useNavigate } from 'react-router-dom';

const { Header } = Layout;

const HeaderAfter = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profileInfo'); // ✅ No state passed
  };

  return (
    <Header className="app-header">
      <div className="logo">
        <img src={LogoImg} alt="SimplyFly Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <Link to="/flights" className="link">Flights</Link>
        <Link to="/myTrips" className="link">My Trips</Link>
        <Avatar 
          src={ProfileImg} 
          size="large" 
          onClick={goToProfile} 
          style={{ cursor: 'pointer' }} 
        />
      </div>
    </Header>
  );
};

export default HeaderAfter;
