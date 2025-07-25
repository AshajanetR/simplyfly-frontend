import React, { useState } from 'react';
import SignUp from '../../Components/SignUp/SignUp';
import SignIn from '../../Components/SignIn/SignIn';
import Dealscard from '../../Components/DealsCard/Dealscard';
import DCardApi from '../../Components/DealsCard/DCardApi';
import FlightSearchBar from '../../Components/FlightSearchBar/FlightSearchBar';
import Profile from '../../Components/Profile/Profile';
import HeaderBefore from '../../Components/HeaderBefore/HeaderBefore';
import HeaderAfter from '../../Components/HeaderAfter/HeaderAfter';
import FooterApp from '../../Components/Footer/FooterApp';
import CompDropdown from '../../Components/CompDropdown/CompDropdown';
import Testimonials from '../../Components/Testimonials/Testimonials';
import PassengerInfo from '../../Components/PassengerInfo/PassengerInfo';
import TotalPassenger from '../../Components/TotalPassenger/TotalPassenger';
import FlightSummaryCard from '../../Components/FlightSummaryCard/FlightSummaryCard';
import PaymentDetail from '../../Components/PaymentDetail/PaymentDetail';
import FlightCard from '../../Components/Flightcard/Flightcard';
import FlightInfoCard from '../../Components/FlightInfoCard/FlightInfoCard';
import FromDropdown from '../../Components/FromDropdown/FromDropdown';
import './Landing.css'

const Landing = () => {

  return (
   <div >
       <HeaderBefore />
       <div className='landing-page'>
       <video className="bg-video" autoPlay muted loop playsInline>
  <source src={require('../../images/flightbg.mp4')} type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div className='boxed-center'>
        <h1 className='click-book-fly'>Click ,Book ,Fly.</h1>
        <FlightSearchBar />
       
        </div>
       </div>
       <DCardApi />
       <Testimonials />
       <FooterApp />
       
   </div>
  )
}

export default Landing;