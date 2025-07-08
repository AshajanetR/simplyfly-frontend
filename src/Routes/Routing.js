import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import SignUp from '../Components/SignUp/SignUp';
import SignIn from '../Components/SignIn/SignIn';
import Flights from '../pages/Flights';
import Passenger from '../pages/Passenger/Passenger';
import Seats from  '../pages/Seats/Seats'
import PaymentDetails from '../pages/PaymentDetails/PaymentDetails';
import Tickets from '../pages/Tickets/Tickets';
import PaymentConfirm from '../pages/PaymentConfirm/PaymentConfirm';

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path = "/" element ={<Landing />}/>
            <Route path = "/signUp" element ={<SignUp />}/>
            <Route path = "/signIn" element ={<SignIn />}/>
            <Route path = "/flights" element ={<Flights />}/>
            <Route path = "/passengers" element ={<Passenger />}/>
            <Route path = "/seats" element ={<Seats />}/>
            <Route path = "/paymentDetails" element ={<PaymentDetails />}/>
            <Route path = "/paymentConfirm" element ={<PaymentConfirm />}/>
            <Route path = "/tickets" element ={<Tickets />}/>
        </Routes>
    </div>
  )
}

export default Routing;