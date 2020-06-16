import React from 'react';
import './title.css';

function Title(props) {

  return (
    <div className="title">
      <div className="title-1">{props.title1}</div>
      <div className="title-2">{props.title2}</div>
    </div>
  )
}

export default Title;
