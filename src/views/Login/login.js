import React from 'react';
import Title from '../../components/title/title';
import Arrow from '../../components/arrow/arrow';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const onSubmit = () => {
    history.push('/profile')
  }

  return (
    <div className="Login">
      <Title title1="last" title2="login" />
      <div className="login-form">
        <input type="text" placeholder="User id" />
        <input type="password" placeholder="Password" />

        <div className="submit" onClick={onSubmit}> View responses <span className="submit-arrow"><Arrow /></span></div>
      </div>

      <div className="footer">
        Don’t have an account? <Link to="/register" className="footer-button">Register </Link>
      </div>
    </div>
  );
}

export default Login;
