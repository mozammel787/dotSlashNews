/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loding from "../Components/Global/Loding";
import useAuth from "../Hooks/useAuth";

const PriveatRouter = ({ children }) => {
  const { user, loding } = useAuth();
  const location = useLocation();
  if (loding) {
    return <Loding />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PriveatRouter;
