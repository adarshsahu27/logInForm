import React, { useContext } from 'react'
import AuthContext from '../context/auth.context';
import { Navigate } from 'react-router-dom';

function GuestGuard({children}) {

    const { isAuthenticated } = useContext(AuthContext);
    console.log("isAuthenticated :: ", isAuthenticated);
    if (isAuthenticated) {
      // navigate("/");
      return <Navigate to="/dashboard"/>
    }
    return <>{children}</>;
  }

export default GuestGuard