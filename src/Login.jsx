import React, { useState } from 'react';
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        <p>No tienes una cuenta? Haz click aquí</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Ingresa tu email"
            />
          </div>
          <div className="input-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button type="submit" className="login-btn">Iniciar sesión</button>
        </form>
        <div className="social-login">
          <button className="google-btn">Login with Google</button>
          <button className="facebook-btn">Login with Facebook</button>
        </div>
      </div>
      <div className="image-box">
        <img src="/user.png" alt="Usuario" />
      </div>
    </div>
  );
};

export default Login;
