import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { ROLES } from "../../../constants";
import { PATHS } from "../../../routes/paths";
import { Outlet, useNavigate } from "react-router-dom";

const UserGuard = () => {
  const navigate = useNavigate();
  const { role } = useAuthContext();
  if (role === ROLES.USER) return <Outlet />;
  return navigate(PATHS.AUTH.SIGNIN);
};

export default UserGuard;
