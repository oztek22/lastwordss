import React, { useState } from 'react';
import Title from '../../components/title/title';
import Arrow from '../../components/arrow/arrow';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import sha256 from 'sha256';

function Register() {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const history = useHistory();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    Axios.post('https://lastwordss.com/api/User/registration', {
      name: username,
      password: sha256(password),
      email,
      phone
    })
      .then(function (response) {
        console.log(response);
        if (response.code === 200) {
          localStorage.setItem('dy', response.data);
          localStorage.setItem('jd', username);
          history.push('/share')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleUserData = (e) => {
    if (emailRegex.test(e.target.value.toLowerCase())) {
      setEmail(e.target.value);
      setPhone(null);
    } else {
      setPhone(e.target.value);
      setEmail(null);
    }
  }

  return (

    <div className="footer-setter">
      <div className="Register">
        <Title title1="last" title2="signup" />
        <div className="register-form">
          <input type="text" placeholder="email / number" onChange={handleUserData} />
          <input type="text" placeholder="User id" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <div className="submit" onClick={onSubmit}> Unlock the mystery <span className="submit-arrow"><Arrow /></span></div>
        </div>
      </div>

      <div className="footer">
        Not dead yet? <Link to="/login" className="footer-button">Login </Link>
      </div>
    </div>

  );
}

export default Register;
