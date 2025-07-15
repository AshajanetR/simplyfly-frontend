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
      const parsedFlight = JSON.parse(flight); // ✅ parse the JSON string
      if (parsedFlight?.request?.adults !== undefined) {
        dispatch(setAdults(parsedFlight.request.adults)); // ✅ safely access adults
      }
      if (parsedFlight?.request?.source !== undefined) {
        dispatch(setFrom(parsedFlight.request.source)); // ✅ safely access adults
      }
      if (parsedFlight?.request?.destination !== undefined) {
        dispatch(setTo(parsedFlight.request.destination)); // ✅ safely access adults
      }
      if (parsedFlight?.request?.depertureT !== undefined) {
        dispatch(setDate(parsedFlight.request.depertureT)); // ✅ safely access adults
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
