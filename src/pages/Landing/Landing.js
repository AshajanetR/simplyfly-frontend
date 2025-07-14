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

import './Landing.css'

const Landing = () => {

  return (
   <div >
       <HeaderBefore />
       <div className='landing-page'>
        <div className='boxed-center'>
        <h1 className='click-book-fly'>Click ,Book ,Fly.</h1>
        {/* <FlightSearchBar /> */}
        <CompDropdown/>
        </div>
       </div>
       <DCardApi />
       <Testimonials />
       <FooterApp />
   </div>
  )
}

export default Landing;