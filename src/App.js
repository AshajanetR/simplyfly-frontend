import { useDispatch } from "react-redux";
import Routing from "./Routes/Routing"
import { getUserFromToken } from './util/decodeToken';
import { useEffect } from "react";
import { setUser } from "./Store/authSlice";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = getUserFromToken();
    if (user) {
      dispatch(setUser(user));
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
