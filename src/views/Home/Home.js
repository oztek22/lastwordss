import React, { useState, useEffect } from 'react';
import './Home.css';
import Title from '../../components/title/title';
import DisasterList from '../../components/disasterList/disasterList';
import Arrow from '../../components/arrow/arrow';
import { Link } from 'react-router-dom';

function Home() {
  const [message, setMessage] = useState('Last wordss is a light hearted fun platform to send and receive anonymous feedback from friends If they get opportunity to ');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('dy')) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="Home">
      <Title title1="last" title2="wordss" />
      <DisasterList />
      <div className="home-message paragraph"> {message}</div>
      
      <div className="submit">
        {isAuthenticated ?
        <Link to="profile"> View last wordss <span className="submit-arrow"><Arrow/></span></Link>
        :
        <Link to="login"> Login <span className="submit-arrow"><Arrow/></span></Link>
        }
      </div>
    </div>
  );
}

export default Home;
