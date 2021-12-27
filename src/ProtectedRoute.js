import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { AccountBox } from "./components/accountBox";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);
  console.log("in protected route")

  return isAuthenticated ? (
    <Route {...restOfProps} component={Component} />
  ) : (
    <Redirect path="/" />
  );
}

export default ProtectedRoute;
