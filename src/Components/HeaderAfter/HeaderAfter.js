import { Layout, Avatar, message } from 'antd';
import './HeaderAfter.css';
import LogoImg from '../../images/LogoImg.png';
import ProfileImg from '../../images/ProfileImg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';

const { Header } = Layout;

const HeaderAfter = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profileInfo');
  };

  const goToFlights = async () => {
    const token = localStorage.getItem('token');
    if(!token){
      navigate("/signIn")
      return;
    }
    try {
      const response = await axios.get(`${API_BASE_URL}/api/flights`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      const flightData = response.data;

      const searchPayload = {
        request: {
          source: 'Any',
          destination: 'Any',
          adults: 1
        },
        response: flightData
      };

      localStorage.setItem('flightSearch', JSON.stringify(searchPayload));
      navigate('/flights');
    } catch (error) {
      console.error('Error fetching all flights:', error);
      message.error('Failed to load flights. Please try again.');
    }
  };

  return (
    <Header className="app-header">
      <div className="logo">
        <img src={LogoImg} alt="SimplyFly Logo" className="logo-img" />
      </div>

      <div className="nav-links">
       
        <span className="link" onClick={goToFlights}>Flights</span>
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