import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = useSelector((state) => state.jwt);

  // If user not logged in → redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  const decoded = jwtDecode(token);

  // If user role not allowed → redirect to unauthorized
  console.log(decoded.applicantType);
    console.log(allowedRoles)
  console.log(!allowedRoles.includes(decoded.applicantType))
  if (allowedRoles && !allowedRoles.includes(decoded.accountType)) {
    return <Navigate to="/unauthorized" />;
  }

  // Otherwise, render the protected content
  return children;
};

export default ProtectedRoute;
