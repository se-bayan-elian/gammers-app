import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import { ROLES } from "../../../constants";
import { useAuthContext } from "../../../context/AuthContext";
import GamesPage from "../../../pages/GamesPage";

const AdminGuard = () => {
  const { role } = useAuthContext();
  if (role === ROLES.ADMIN) return <GamesPage />;
  return <Navigate to={PATHS.AUTH.SIGNIN} />;
};

export default AdminGuard;
