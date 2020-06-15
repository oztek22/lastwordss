import React, { useEffect, useState } from 'react';
import Check from '../../components/check/check'
import './Send.css';
import Arrow from '../../components/arrow/arrow';

function Send() {
  const lastWords = "If we don't make it out alive through 2020, what would be your last words for me?";

  const [message, setMessage] = useState('');

  useEffect(() => {
  }, []);

  return (
    <div className="Send">
      <div className="title">
        <div className="title-1">last</div>
        <div className="title-2">wordss</div>
      </div>
      <div className="send-main">
        <div className="send-main-title">{lastWords}</div>
        <input type="text" className="send-main-message" placeholder="don’t hold back, write it down"></input>
        <div className="send-main-submit">POST ANONYMOUSLY <span className="send-submit-arrow"><Arrow/></span></div>
      </div>
    </div>
  );
}

export default Send;
