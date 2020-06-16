import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="app-children">
        {props.children}
      </div>
    </div>
  );
}

export default App;
