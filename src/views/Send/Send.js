import React, { useEffect, useState } from 'react';
import Check from '../../components/check/check'
import './Send.css';

function Send() {
  const lastWords = 'I am not sure if we will make it to 2020 so tell me your last words...';
  const tragedies = [
    {name: 'A deadly virus', isChecked: true, id: 1},
    {name: 'Big ass earthquakes', isChecked: true, id: 2},
    {name: 'Forest Fire', isChecked: true, id: 3},
    {name: 'Alien Invasion', isChecked: false, id: 4},
    {name: 'Dinosaurs Attack!', isChecked: false, id: 5}
  ];

  const [message, setMessage] = useState('');

  useEffect(() => {
  }, []);

  return (
    <div className="Send">
      <div className="send-header">
        {tragedies.map(tragedy => {
          return <div key={tragedy.id} className="send-header-list">
            <span className="send-header-checkbox">{tragedy.isChecked ? <Check /> : null }</span>
            <span className="send-header-text">{ tragedy.name }</span>
          </div>
        })}
      </div>
      <div className="send-main">
        <div className="send-main-title">{lastWords}</div>
        <textarea className="send-main-message"></textarea>
        <div className="send-main-submit">Write anonymously...</div>
      </div>
    </div>
  );
}

export default Send;
