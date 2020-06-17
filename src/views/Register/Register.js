import React from 'react';
import Title from '../../components/title/title';
import Arrow from '../../components/arrow/arrow';
import { Link, useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();

  const onSubmit = () => {
    history.push('/profile')
  }

  return (
    <div className="Register">
      <Title title1="last" title2="signup" />
      <div className="register-form">
        <input type="text" placeholder="User id" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Email (optional)" />
        <input type="text" placeholder="Phone number (optional)" />

        <div className="submit" onClick={onSubmit}> Create your link <span className="submit-arrow"><Arrow /></span></div>
      </div>

      <div className="footer">
        Already have an account? <Link to="/login" className="footer-button">Login </Link>
      </div>
    </div>
  );
}

export default Register;
