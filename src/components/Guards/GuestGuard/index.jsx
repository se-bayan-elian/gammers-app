import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { ROLES } from "../../../constants";
import { PATHS } from "../../../routes/paths";
import { Outlet, useNavigate } from "react-router-dom";

const GuestGuard = () => {
  const { role } = useAuthContext();
  const navigate = useNavigate();
  if (role === ROLES.USER) return navigate("user/" + PATHS.Home);
  if (role === ROLES.ADMIN) return navigate("admin/" + PATHS.Home);
  return <Outlet />;
};

export default GuestGuard;
