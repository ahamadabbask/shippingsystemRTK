import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Authentication/Login";

const Router = () => {
  // Protected Router
  const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem("user")) {
      return <Navigate to="/" replace />;
    }

    return children;
  };
  // Login Router When user is login then Login page is not Show Validation
  const LoginRoute = ({ children }) => {
    if (localStorage.getItem("user")) {
      return <Navigate to="/shipping" replace />;
    }
    return children;
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginRoute>
            <Login />
          </LoginRoute>
        }
      />
      <Route
        path="/shipping/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
