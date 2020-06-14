import React, { useEffect, useState } from 'react';
import Check from '../../components/check/check'
import './Send.css';

function Send() {
  const lastWords = "I'm not sure we're gonna make it alive out of(or through) 2020. What would be your last words for me?";

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
        <div className="send-main-submit">POST ANONYMOUSLY</div>
      </div>
    </div>
  );
}

export default Send;
