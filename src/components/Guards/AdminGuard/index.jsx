import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import { ROLES } from "../../../constants";
import { useAuthContext } from "../../../context/AuthContext";

const AdminGuard = () => {
  const navigate = useNavigate();
  const { role } = useAuthContext();
  if (role === ROLES.ADMIN) return <Outlet />;
  return navigate(PATHS.AUTH.SIGNIN);
};

export default AdminGuard;
