import {
  useLocation,
  Navigation,
  Outlet,
  Navigate,
  json,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { getLocalStorage } from "../Api/allApi";

const RequiredAuth = () => {
  const auth = useAuth();
  const location = useLocation();
  const [user, setUser] = useState({});
  //   console.log(auth);

  useEffect(() => {
    let userData = getLocalStorage("user");
    setUser(JSON.parse(userData));
    console.log(user);
  }, []);

  return user ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/login" state={{ form: location }} replace />
    </>
  );
};
export default RequiredAuth;
