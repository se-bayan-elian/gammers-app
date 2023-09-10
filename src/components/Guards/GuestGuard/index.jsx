import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { ROLES } from "../../../constants";
import { PATHS } from "../../../routes/paths";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const GuestGuard = () => {
  const { role } = useAuthContext();
  if (role === ROLES.USER) return <Navigate to={"/user/" + PATHS.Home} />;
  if (role === ROLES.ADMIN) return <Navigate to={"/admin/" + PATHS.Home} />;
  return <Outlet />;
};

export default GuestGuard;
