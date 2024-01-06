import React from "react";
import { useAuth } from "../authen/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, rol }) => {
    const { user } = useAuth();
  
    if (!user) {
      return <Navigate to="/user" />;
    } else if (user.rol !== rol) {
      return <Navigate to={user.rol === 'usuario' ? '/user/home' : user.rol === 'experto' ? '/user/psicologico':'/user/juridico'} />;
    }
  
    return children;
  };
  

  export default ProtectedRoute;  
  