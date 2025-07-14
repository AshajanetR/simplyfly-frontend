import PassengerInfo from '../../Components/PassengerInfo/PassengerInfo';
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import "./Passenger.css";
import { useLocation } from 'react-router-dom';

const Passenger = () => {
  const { state } = useLocation(); // contains flight & adult
  const { flight, adults } = state || {};

  return (
    <div>
      <div className='pass-container'>
        <div className='left1'>
          {/* Moved buttons into PassengerInfo */}
          <PassengerInfo adultCount={adults} flight={flight} />
        </div>
        <div className='right2'>
          <FlightSummaryCard flight={flight} />
        </div>
      </div>
    </div>
  );
};

export default Passenger;
