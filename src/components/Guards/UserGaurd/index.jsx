import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { ROLES } from "../../../constants";
import { PATHS } from "../../../routes/paths";
import { Navigate, Outlet } from "react-router-dom";
import GamesPage from "../../../pages/GamesPage";

const UserGuard = () => {
  const { role } = useAuthContext();
  console.log(role)
  if (role === ROLES.USER) return <GamesPage />;
  return <Navigate to={PATHS.AUTH.SIGNIN} />;
};

export default UserGuard;
