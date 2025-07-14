import React from 'react'
import FlightInfoCard from '../../Components/FlightInfoCard/FlightInfoCard'
import PassengerSeatCard from '../../Components/PassengerSeatcard/PassengerSeatcard'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/ButtonComp'
import SeatsSelector from '../../Components/SeatSelector/SeatSelector'
import SeatsSelector2 from '../../Components/SeatSelector/Seatselector2'
import BusinessClassSeats from '../../Components/SeatSelector/BusinessClassSeats'
import './Seats.css'
const Seats = () => {
  return (
    <div>
        <div className='flightInfoCard'>
          <FlightInfoCard/>
        </div>
        <div className='box-seats'>
        <SeatsSelector2 />
        <BusinessClassSeats />
        <SeatsSelector />
        </div>
        <PassengerSeatCard />
        
        <div className='buttons-seats'>
                          <Link to="/passengers"><Button /></Link>
                          <Link to="/paymentDetails"><Button /></Link>
        </div>
    </div>
  )
}

export default Seats;