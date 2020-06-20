import React, { useState } from 'react';
import Title from '../../components/title/title';
import Arrow from '../../components/arrow/arrow';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import sha256 from 'sha256';

function Register() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
      Axios.post('http://52.66.205.103/sayit/User/registration', {
        email: username,
        password: sha256(password)
      })
      .then(function (response) {
        console.log(response);
        if (response.code === 200) {
          localStorage.setItem('dy', response.data);
          history.push('/share')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="Register">
      <Title title1="last" title2="signup" />
      <div className="register-form">
        <input type="text" placeholder="User id" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <div className="submit" onClick={onSubmit}> Create your link <span className="submit-arrow"><Arrow /></span></div>
      </div>

      <div className="footer">
        Already have an account? <Link to="/login" className="footer-button">Login </Link>
      </div>
    </div>
  );
}

export default Register;
