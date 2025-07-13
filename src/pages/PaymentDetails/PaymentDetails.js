import React from 'react'
import PaymentDetail from '../../Components/PaymentDetail/PaymentDetail';
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/ButtonComp';
import './PaymentDetails.css'

const PaymentDetails = () => {
  return (
    <div>
        <div className='payment-detail'>
          <PaymentDetail />
          <FlightSummaryCard />
        </div>
        <div className='buttons-pay'>
              <Link to="/seats"><Button /></Link>
              <Link to="/paymentConfirm"><Button /></Link>                    
        </div>
    </div>
  )
}

export default PaymentDetails;