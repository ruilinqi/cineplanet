import React, { useState } from 'react';
// import AuthContext from "../providers/AuthProvider";
import 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import './Login.css'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        window.location.href = '/login';
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="columns is-centered user-form">
      <div className="column is-three-fifths is-offset-one-fifth">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <p className="control has-icons-left">
            <input
            className="text-input-padding"
            type="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <span className="icon is-small is-left">
            <FontAwesomeIcon icon={solid('user')} />
            </span>
            </p>
          </div>
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
              <button type="submit" className="button is-rounded is-primary button-yellow">Register</button>
              {error && <p>{error}</p>}
            </p>
          </div>      
        </form>
      </div>
    </div>
  );
};

export default Signup;
