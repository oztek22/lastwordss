import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {/* <header>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/send">Send</Link></li>
        </ul>
      </header> */}
      <div className="app-children">
      <div className="pre-header"></div>
        {props.children}
      </div>
    </div>
  );
}

export default App;
