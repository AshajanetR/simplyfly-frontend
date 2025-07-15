import React, { useState } from 'react'
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import FlightCard from '../../Components/Flightcard/Flightcard'
import BookingAlert from '../../Components/BookingAlert/BookingAlert';
import BookingConfirmation from '../../Components/BookingConfirmation/BookingConfirmation';
import { Link, useLocation } from 'react-router-dom'
import Button from '../../Components/Button/ButtonComp';
import './PaymentConfirm.css'

const PaymentConfirm = () => {
  const [amt, setAmt] = useState(0);
  const location = useLocation();
 const transactionId = location.state?.transId;
  
    const getAmt = (fare) => {
      setAmt(fare + 121); // Add tax
    };
    console.log(transactionId)
  return (
    <div>
        <BookingAlert transactionId = {transactionId}/>
        <div className='book-flight'>
          <BookingConfirmation transactionId = {transactionId}/>
          <FlightSummaryCard getAmt={getAmt}/>
        </div>
        <FlightCard />
        
        <div className='buttons-confirm'>
              <Link to="/tickets"><Button /></Link>                  
        </div>
    </div>
  )
}

export default PaymentConfirm;