import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../../services/auth.service";

function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  //   setEmailError("");
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  //   setPasswordError("");
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (!email) {
  //     setEmailError("Email is required");
  //     return;
  //   }

  //   if (!password) {
  //     setPasswordError("Password is required");
  //     return;
  //   }

  //   const emailPattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/";
  //   if (!emailPattern.test(email)) {
  //     setEmailError("Invalid email format");
  //     return;
  //   }
  //   console.log("Login successful");
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Invalid email format");
    } else {
      try {
        const result = await SignIn(formData);
        if (result.status === 200) {
          console.log("SignIn Successful", result.data);
        } else if (result.status === 400) {
          console.log("SignIn Error", result.data);
        } else {
          console.log("Error while Signing In");
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <div className="card">
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">SignIn</button>
        </div>
      </form>
      <p>
        Need an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default SignInForm;
