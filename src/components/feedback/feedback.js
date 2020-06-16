import React from 'react';
import './feedback.css';

function Feedback(props) {
  return (
    <div className="Feedback">
      <div className="feedback-message"> {props.message} </div>
      <div className="feedback-name"> {props.name} </div>
    </div>
  );
}

export default Feedback;
