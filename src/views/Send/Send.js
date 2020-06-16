import React, { useEffect, useState } from 'react';
import './Send.css';
import Arrow from '../../components/arrow/arrow';
import { Link } from 'react-router-dom';
import DisasterList from '../../components/disasterList/disasterList';
import Title from '../../components/title/title';

function Send(props) {
  const lastWords = "If we don't make it out alive through 2020, what would be your last words for me?";
  const [submitLabel, setSubmitLabel] = useState("");
  const [view, setView] = useState(1);

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
      case 2:
        setView(3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Send">
      <Title title1="last" title2="wordss" />
      { view === 1 ?  <DisasterList /> : null}
      <div className="send-main">
        <div className="paragraph">{lastWords}</div>
        { view === 2 ?
          <textarea className="send-main-message" placeholder="don’t hold back, write it down"></textarea>
          : null
        }
        <div className="submit" onClick={onSubmit}> {submitLabel} <span className="submit-arrow"><Arrow/></span></div>
      </div>
      { view === 2 && !props.user?
        <div className="footer">
          <Link to="/login" className="footer-button">Login </Link> to save your responses
        </div>
        : null
      }
    </div>
  );
}

export default Send;
