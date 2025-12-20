import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send login credentials to an authentication service
    console.log('Login attempted:', loginData);
    alert('Login functionality to be implemented');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to EarthLink Business</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          <div className="login-links">
            <a href="#forgot-password">Forgot Password?</a>
            <a href="#signup">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;