
import PassengerInfo from '../../Components/PassengerInfo/PassengerInfo';
import TotalPassenger from '../../Components/TotalPassenger/TotalPassenger';
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import "./Passenger.css";
import Button from "../../Components/Button/ButtonComp"
import { Link } from 'react-router-dom';

const Passenger = () => {
  return (
    <div>
        <div className='pass-container'>
            <div className='left1'>
                <PassengerInfo/>
                <TotalPassenger />
                <div className='buttons'>
                  <Link to="/flights"><Button /></Link>
                  <Link to="/seats"><Button /></Link>
                </div>
            </div>
            <div className='right2'>
            <FlightSummaryCard />
            </div>
        </div>
    
    
    </div>
  )
}

export default Passenger;