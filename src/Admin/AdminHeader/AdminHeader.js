import { Layout, Avatar } from 'antd';
import './AdminHeader.css';
import LogoImg from '../../images/LogoImg.png';
import AdminProfileImg from '../../images/ProfileImg.jpg'; // Optional: replace with actual admin image
import { Link, useNavigate } from 'react-router-dom';

const { Header } = Layout;

const AdminHeader = () => {
  const navigate = useNavigate();

  const goToAdminProfile = () => {
    navigate('/adminProfile'); // Adjust path if needed
  };

  return (
    <Header className="app-header">
      <div className="logo">
        <img src={LogoImg} alt="SimplyFly Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <Link to="/adminhome" className="link">Dashboard</Link>
        <Link to="/allowners" className="link">Show Owners</Link>
        <Avatar
          src={AdminProfileImg}
          size="large"
          onClick={goToAdminProfile}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </Header>
  );
};

export default AdminHeader;
