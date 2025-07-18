import { useDispatch } from "react-redux";
import Routing from "./Routes/Routing"
import { getUserFromToken } from './util/decodeToken';
import { useEffect } from "react";
import { setUser } from "./Store/authSlice";
import { setAdults, setDate, setFrom, setTo } from "./Store/flightSlice";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  const user = getUserFromToken();
  if (user) {
    dispatch(setUser(user));
  }

  const flight = localStorage.getItem("flightSearch");
  if (flight) {
    try {
      const parsedFlight = JSON.parse(flight); 
      if (parsedFlight?.request?.adults !== undefined) {
        dispatch(setAdults(parsedFlight.request.adults)); 
      }
      if (parsedFlight?.request?.source !== undefined) {
        dispatch(setFrom(parsedFlight.request.source)); 
      }
      if (parsedFlight?.request?.destination !== undefined) {
        dispatch(setTo(parsedFlight.request.destination)); 
      }
      if (parsedFlight?.request?.depertureT !== undefined) {
        dispatch(setDate(parsedFlight.request.depertureT));
      }
    } catch (error) {
      console.error("Error parsing flightSearch from localStorage:", error);
    }
  }
}, []);

  
  return (
    <div>
      {/* <Landing /> */}
      <Routing />
    </div>
  )
}

export default App;
