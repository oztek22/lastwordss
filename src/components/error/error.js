import React from 'react';
import './error.css';

function ErrorMessage(props) {
  return (
    <div className="error-message" dangerouslySetInnerHTML={{ __html: props.error }}></div>
  );
}

export default ErrorMessage;
