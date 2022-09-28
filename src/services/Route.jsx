import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const token = localStorage.getItem("access_token");

  if (!token || token === "" || token === undefined) {
    return <Navigate to="/logout" />;
  }

  return <Outlet />;
}

function UnPrivateRoute() {
  const token = localStorage.getItem("token");

  if (!token || token === "" || token === undefined) {
    <Outlet />;
  }

  return <Navigate to="/" />;
}

export { PrivateRoute, UnPrivateRoute };
