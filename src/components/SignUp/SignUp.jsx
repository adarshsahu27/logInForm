import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    number: "",
    gender: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="card">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
      <p>
        Already a user? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default SignupForm;
