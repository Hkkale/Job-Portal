import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = useSelector((state) => state.jwt);

  // 🔹 Step 1: If user not logged in → redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return <Navigate to="/login" />;
  }

  // 🔹 Step 2: Get the role from token (accountType)
  const userRole = decoded.accountType;

  console.log("Decoded Role:", userRole);
  console.log("Allowed Roles:", allowedRoles);

  // 🔹 Step 3: If role not allowed → redirect to unauthorized
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  // 🔹 Step 4: Otherwise, render the protected content
  return children;
};

export default ProtectedRoute;
