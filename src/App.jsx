import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignInForm from "./components/SignIn/SignIn";
import SignupForm from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SignInForm />} />
      <Route path="/signUp" element={<SignupForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
