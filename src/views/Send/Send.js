import React, { useState } from 'react';
import './Send.css';
import Arrow from '../../components/arrow/arrow';
import { Link } from 'react-router-dom';
import DisasterList from '../../components/disasterList/disasterList';
import Title from '../../components/title/title';
import Axios from 'axios';

function Send(props) {
  const lastWords = "If we don't make it out alive through 2020, what would be your last words for me?";
  const submitLabel = "Post anonymously";
  const [view, setView] = useState(2);
  const [post, setPost] = useState('');
  const receiverId = props.match.params.userId;

  const onSubmit = () => {
    const headers = {
      'TOKEN': localStorage.getItem('dy') || ''
    }

    Axios.post('https://lastwordss.com/api/User/sendMessage', {
      to: receiverId,
      post: post
    }, {
      headers
    })
      .then(function (response) {
        console.log(response);
        if (response.data && response.data.code === 200) {
          setView(2);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (

    <div className="footer-setter">
      <div className={'Send' + (view === 1 ? ' one' : '')}>
        <Title title1="last" title2="wordss" />
        {view === 1 ? <DisasterList /> : null}
        <div className="send-main">
          {view === 1 ?
            <>
              <div className="paragraph">{lastWords}</div>
              <textarea className="send-main-message" placeholder="don’t hold back, write it down" onChange={(e) => setPost(e.target.value)}></textarea>
              <div className="submit" onClick={onSubmit}> {submitLabel} <span className="submit-arrow"><Arrow /></span></div>
            </>
            :
            <div className="thankyou">
              <span>Thank you</span> for that response! Login and <span>share</span> your last wordss <span>link to</span> save more such responses from <span>your friends</span>!
          </div>
          }
        </div>
      </div>
      {!localStorage.getItem('jd') ?
        <div className="footer">
          <Link to="/login" className="footer-button">Login </Link> to save your responses
        </div>
        : null
      }
    </div>
  );
}

export default Send;
