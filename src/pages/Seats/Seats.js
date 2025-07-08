import React from 'react'
import FlightInfoCard from '../../Components/FlightInfoCard/FlightInfoCard'
import PassengerSeatCard from '../../Components/PassengerSeatcard/PassengerSeatcard'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/ButtonComp'
const Seats = () => {
  return (
    <div>
        <FlightInfoCard />
        <PassengerSeatCard />
        <div className='buttons'>
                          <Link to="/passengers"><Button /></Link>
                          <Link to="/paymentDetails"><Button /></Link>
        </div>
    </div>
  )
}

export default Seats;