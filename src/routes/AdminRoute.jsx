import React from "react";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <LoadingSpinner />;
  if (role === "Admin") return children;
  return <Navigate to="/dashboard" />;
};

export default AdminRoute;
