import React, { useEffect, useState } from 'react';
import './Send.css';
import Arrow from '../../components/arrow/arrow';
import { Link } from 'react-router-dom';
import DisasterList from '../../components/disasterList/disasterList';

function Send(props) {
  const lastWords = "If we don't make it out alive through 2020, what would be your last words for me?";
  const [submitLabel, setSubmitLabel] = useState("");
  const [view, setView] = useState(1);
  const [message, setMessage] = useState('');

  useEffect(() => {
    updateSubmitLabel();
  }, [view]);

  const updateSubmitLabel = () => {
    switch (view) {
      case 1:
        setSubmitLabel('write your last words');
        break;
      case 2:
        setSubmitLabel('Post anonymously');
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    switch (view) {
      case 1:
        setView(2);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Send">
      <div className="title">
        <div className="title-1">last</div>
        <div className="title-2">wordss</div>
      </div>
      { view === 1 ?  <DisasterList /> : null}
      <div className="send-main">
        <div className="send-main-title">{lastWords}</div>
        { view === 2 ?
          <textarea className="send-main-message" placeholder="don’t hold back, write it down"></textarea>
          : null
        }
        <div className="send-main-submit" onClick={onSubmit}> {submitLabel} <span className="send-submit-arrow"><Arrow/></span></div>
      </div>
      { view === 2 && !props.user?
        <div className="send-footer">
          <Link to="/login" className="send-login">Login </Link> to save your responses
        </div>
        : null
      }
    </div>
  );
}

export default Send;
