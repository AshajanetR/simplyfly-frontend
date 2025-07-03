import React, { useState } from 'react';
import SignUp from '../Components/SignUp/SignUp';
import SignIn from '../Components/SignIn/SignIn';
import Dealscard from '../Components/DealsCard/Dealscard';
import DCardApi from '../Components/DealsCard/DCardApi';
import FlightSearchBar from '../Components/FlightSearchBar/FlightSearchBar';
import Profile from '../Components/Profile/Profile';
import HeaderBefore from '../Components/HeaderBefore/HeaderBefore';
import HeaderAfter from '../Components/HeaderAfter/HeaderAfter';
import FooterApp from '../Components/Footer/FooterApp';
import Testimonials from '../Components/Testimonials/Testimonals';


const Landing = () => {

  return (
   <div>
        {/* <Profile/> */}
        {/* <HeaderBefore/> */}
        <HeaderAfter/>
   </div>
  )
}

export default Landing;