import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email format');
      return;
    }
    console.log('Login successful');
  };

  return (
    <div className='card'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <span style={{ color: 'red' }}>{emailError}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span style={{ color: 'red' }}>{passwordError}</span>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Need an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default SignInForm;