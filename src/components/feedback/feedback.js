import React from 'react';
import './feedback.css';

function Feedback(props) {
  return (
    <div className="Feedback">
      {props.message}
    </div>
  );
}

export default Feedback;
