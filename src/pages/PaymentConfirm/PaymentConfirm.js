import React from 'react'
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import FlightCard from '../../Components/Flightcard/Flightcard'
import BookingAlert from '../../Components/BookingAlert/BookingAlert';
import BookingConfirmation from '../../Components/BookingConfirmation/BookingConfirmation';
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/ButtonComp';
import './PaymentConfirm.css'

const PaymentConfirm = () => {
  return (
    <div>
        <BookingAlert />
        <div className='book-flight'>
          <BookingConfirmation />
          <FlightSummaryCard />
        </div>
        <FlightCard />
        
        <div className='buttons-confirm'>
              <Link to="/tickets"><Button /></Link>                  
        </div>
    </div>
  )
}

export default PaymentConfirm;