import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth.context";

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  console.log("isAuthenticated :: ", isAuthenticated);
  if (!isAuthenticated) {
    // navigate("/");
    return <Navigate to="/"/>
  }
  return <>{children}</>;
}

export default AuthGuard;