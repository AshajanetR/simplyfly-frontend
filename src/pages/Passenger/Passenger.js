import PassengerInfo from '../../Components/PassengerInfo/PassengerInfo';
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import "./Passenger.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Passenger = () => {
  const { state } = useLocation(); 
  const { flight, adults } = state || {};
  console.log(adults);
  useEffect(()=>{
    localStorage.setItem("Flight",JSON.stringify(flight))
  },[])

  let [amt,setAmt] = useState(0)
  
    const getAmt = (fare) =>{
      setAmt(fare+121);
    }

  return (
    <div>
      <div className='pass-container'>
        <div className='left1'>
         
          <PassengerInfo adultCount={adults} flight={flight} />
        </div>
        <div className='right2'>
          <FlightSummaryCard getAmt={getAmt} flight={flight} />
        </div>
      </div>
    </div>
  );
};

export default Passenger;
