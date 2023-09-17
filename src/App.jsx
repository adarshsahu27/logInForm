import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignInForm from "./components/SignIn/SignIn";
import SignupForm from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import GuestGuard from "./guards/GuestGuard";
import AuthGuard from "./guards/AuthGuard";
import { AuthProvider } from "./context/auth.context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <GuestGuard>
              <SignInForm />
            </GuestGuard>
          }
        />
        <Route
          path="/signUp"
          element={
            <GuestGuard>
              <SignupForm />
            </GuestGuard>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
