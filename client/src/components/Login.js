import React, { useState, useContext } from "react";
// import axios from "axios";
// import { Redirect } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import AuthContext from "../providers/AuthProvider";

const Login = () => {

  const { setAuth } = useContext(AuthContext);
  const rawAuth = window.localStorage.getItem("id")
  const userAuth = JSON.parse(rawAuth)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem('token', data.token);
        console.log('setitem users', data.token) // undefined

        
        setAuth({ email, password })
        const user_id = response?.data?.id
        window.localStorage.setItem("password", JSON.stringify(password))
        window.localStorage.setItem("user_email", JSON.stringify(email))
        setEmail('')
        setPassword('');

        window.location.href = '/';
      }
    } catch (err) {
      setError(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
