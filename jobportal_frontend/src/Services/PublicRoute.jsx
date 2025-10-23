import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";

const PublicRoute = ({ children }) => {
  const token = useSelector((state) => state.jwt);

  // If user not logged in → redirect to login
  if (token) {
    return <Navigate to="/" />;
  }

  
  // Otherwise, render the protected content
  return children;
};

export default PublicRoute;
