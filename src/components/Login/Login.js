import React, { useState } from 'react';
import './LoginPage.css';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('root@gmail.com');
  const [password, setPassword] = useState('1234567');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const inputValue = e.target.value;
    setUsername(inputValue); // Remove the validation for "@" inclusion
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: Check if fields are empty
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    // Optionally, you can check for a minimum password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Check if the entered username and password match the pre-set values
    if (username === 'root@gmail.com' && password === '1234567') {
      navigate('/Dashboard');
    } else {
      alert("login failed...")
    }

    // Clear the error message after each submission
    setError('');
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="logo1">
          <img src={require('./logo.png')} alt="Company Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
