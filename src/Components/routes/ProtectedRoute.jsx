import React from "react";
import { useAuth } from "../authen/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, rol }) => {
    const { user } = useAuth();
  
    if (!user) {
      return <Navigate to="/user" />;
    } else if (user.rol !== rol) {
      // Ajustar las rutas de redirección según el rol del usuario
      let redirectTo;
      switch (user.rol) {
        case 'abogado':
          redirectTo = '/user/juridico';
          break;
        case 'psicolo':
          redirectTo = '/user/psicologico';
          break;
        case 'usuario':
        default:
          redirectTo = '/user/home';
          break;
      }
      return <Navigate to={redirectTo} />;
    }
  
    return children;
};

export default ProtectedRoute;
