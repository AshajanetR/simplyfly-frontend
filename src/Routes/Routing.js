import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import SignUp from '../Components/SignUp/SignUp';
import SignIn from '../Components/SignIn/SignIn';
import Flights from '../pages/Flights';
import Passenger from '../pages/Passenger/Passenger';
import Seats from '../pages/Seats/Seats';
import PaymentDetails from '../pages/PaymentDetails/PaymentDetails';
import Tickets from '../pages/Tickets/Tickets';
import PaymentConfirm from '../pages/PaymentConfirm/PaymentConfirm';
import Home from '../pages/Home/Home';
import MyTrips from '../pages/MyTrips/MyTrips';
import Profile from '../Components/Profile/Profile';
import OwnerHome from '../Owner/OwnerHome/OwnerHome';
import OwnerProfile from '../Owner/OwnerProfile/OwnerProfile';
import OwnerAddFlight from '../Owner/OwnerAddFlight/OwnerAddFlight';
import UpdateFlight from '../Owner/UpdateFlight/UpdateFlight';
import ViewFlight from '../Owner/ViewFlight/ViewFlight';
import ViewBookings from '../Owner/ViewBookings/ViewBookings';
import Ticket from '../Components/Ticket/Ticket';
import AdminHome from '../Admin/AdminHome/AdminHome';
import AllOwnerPage from '../Admin/OwnerCard/AllOwnerPage';
import AdminProfile from '../Admin/AdminProfile/AdminProfile';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/passengers" element={<Passenger />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/paymentDetails" element={<PaymentDetails />} />
        <Route path="/ownerhome" element={<OwnerHome />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/paymentConfirm" element={<PaymentConfirm />} />
        <Route path="/tickets/:bookingId" element={<Tickets />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myTrips" element={<MyTrips />} />
        <Route path="/profileInfo" element={<Profile />} />
        <Route path="/ownerProfile" element={<OwnerProfile />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
        <Route path="/addFlight" element={<OwnerAddFlight/>} />
        <Route path="/update-flight/:id" element={<UpdateFlight />} />
        <Route path="/viewFlight/:id" element={<ViewFlight />} />
        <Route path="/allowners" element={<AllOwnerPage />} />
        <Route path="/view-bookings/:flightId" element={<ViewBookings />} />
      </Routes>
    </div>
  );
};

export default Routing;