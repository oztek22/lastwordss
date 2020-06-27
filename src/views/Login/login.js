import React, { useState, useEffect } from 'react';
import Title from '../../components/title/title';
import Arrow from '../../components/arrow/arrow';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import sha256 from 'sha256';
import ErrorMessage from '../../components/error/error';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const onSubmit = () => {
    setError('');
    Axios.post('https://lastwordss.com/api/User', {
      email: username,
      password: sha256(password)
    })
      .then(function (response) {
        console.log(response);
        if (response.data && response.data.code === 200) {
          localStorage.setItem('dy', response.data.data);
          localStorage.setItem('jd', username);
          history.push('/profile');
        } else if (response.data && response.data.code === 400) {
          setError(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (

    <div className="footer-setter">
      <div className="Login">
        <Title title1="last" title2="login" />
        <div className="login-form">
          <input type="text" placeholder="User id" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <div className="submit" onClick={onSubmit}> View responses <span className="submit-arrow"><Arrow /></span></div>
          <ErrorMessage error={error} />
        </div>
      </div>
      <div className="footer">
        Don’t have an account? <Link to="/register" className="footer-button">Register </Link>
      </div>
    </div>
  );
}

export default Login;
