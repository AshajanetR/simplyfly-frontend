import React, { useEffect, useState } from 'react'
import FlightInfoCard from '../../Components/FlightInfoCard/FlightInfoCard'
import PassengerSeatCard from '../../Components/PassengerSeatcard/PassengerSeatcard'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/ButtonComp'
import SeatsSelector from '../../Components/SeatSelector/SeatSelector'
import SeatsSelector2 from '../../Components/SeatSelector/Seatselector2'
import BusinessClassSeats from '../../Components/SeatSelector/BusinessClassSeats'
import './Seats.css'
import { useSelector } from 'react-redux'
import NewBusinessSeats from '../../Components/SeatSelector/NewBusinessSeats'
const Seats = () => {

  const passengerRedux = useSelector((state) => state.passenger?.passengers || []);
  const [passengers, setPassengers] = useState([]);

    useEffect(() => {
      passInfos();
  }, []);

  const passInfos = () =>{
     if (passengerRedux.length > 0) {
      setPassengers(passengerRedux);
    } else {
      const stored = JSON.parse(localStorage.getItem('passengerInfo')) || [];
      setPassengers(stored);
    }
  }

  // const passengerRedux = useSelector((state) => state.passenger?.passengers || []);
  // const passengers =
  //   passengerRedux.length > 0
  //     ? passengerRedux
  //     : JSON.parse(localStorage.getItem('passengerInfo')) || [];

  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];

  console.log('passengers', passengers);
  console.log('selectedSeats', selectedSeats);

  const count = useSelector((state)=>state.flight.adults)
  
  return (
    <div>
        <div className='flightInfoCard'>
          <FlightInfoCard/>
        </div>
        <div className='box-seats'>
        {/* <SeatsSelector2 /> */}
        <SeatsSelector />
        <NewBusinessSeats/>
         <BusinessClassSeats />
        
       
        {/* <SeatsSelector /> */}
        </div>
        {/* ✅ Passenger seat cards */}
      <div className='passenger-cards'>
        {passengers.map((passenger, index) => (
          <PassengerSeatCard
            key={index}
            passenger={passenger}
            seatNumber={selectedSeats[index]} // ✅ You can update this later when seat is selected
          />
        ))}
      </div>
        
        <div className='buttons-seats'>
                          <Link to="/passengers"><Button /></Link>
                          <Link to="/paymentDetails"><Button /></Link>
        </div>
    </div>
  )
}

export default Seats;