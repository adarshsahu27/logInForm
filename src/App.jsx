import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignInForm from "./components/SignIn/SignIn";
import SignupForm from "./components/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SignInForm />} />
      <Route path="/signUp" element={<SignupForm />} />
    </Routes>
  );
}

export default App;
