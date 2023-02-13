import React, { useState, useContext } from "react";
// import axios from "axios";
// import { Redirect } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import AuthContext from "../providers/AuthProvider";
import 'bulma/css/bulma.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import './Login.css'

const Login = () => {

  const { setAuth } = useContext(AuthContext);
  const rawAuth = window.localStorage.getItem("id");
  const userAuth = JSON.parse(rawAuth);

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
        // console.log('setitem users', data.token) // undefined

        
        setAuth({ email, password })
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
    <div className="columns is-centered user-form">
      <div className="column is-three-fifths is-offset-one-fifth">
      <h2>Login</h2>
        <form onSubmit={handleSubmit} className = "login-page">
          <div className="field">
            <p className="control has-icons-left">
              <input
              className="text-input-padding"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="icon is-small is-left">
              {/* <i className="fas fa-envelope"></i> */}
              <FontAwesomeIcon icon={solid('envelope')} />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
              className="text-input-padding"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />    
              <span className="icon is-small is-left">
              <FontAwesomeIcon icon={solid('lock')} />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button type="submit" className="button is-rounded is-primary button-yellow">Login</button>
              {error && <p>{error}</p>}
            </p>
          </div>      
        </form>
        <div className="columns login-register-text-container">
          <div className="column is-6">
            <span className="icon is-small arrow-white arrow-left">
              <FontAwesomeIcon icon={solid('arrow-left-long')} />
            </span><br/>
            <p className="account-message text-left">Back to 
            <Link to="/" className='login-register-text'> Home</Link>
            </p>
          </div>
          <div className="column is-6">
            <span className="icon is-small arrow-white arrow-right">
              <FontAwesomeIcon icon={solid('arrow-right-long')} />
            </span><br/>
            <p className="account-message text-right">Don't have an account yet? Create one now: 
            <Link to="/Signup" className='login-register-text'> Register</Link>
            </p>
          </div>
        </div>
        
    </div>
    </div>
  );
};

export default Login;
