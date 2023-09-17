import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignIn } from "../../services/auth.service";
import { toast } from "react-hot-toast";
import AuthContext from "../../context/auth.context";

function SignInForm() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Invalid email format");
    } else {
      const response = await SignIn(formData);
      if (response.isSuccess) {
        toast.success(response.message, { duration: 3000 });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setIsAuthenticated(true);
        navigate("/dashboard");
      } else {
        toast.error(response.message, { duration: 3000 });
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
