import React, { useEffect, useState } from 'react';
import Feedback from '../../components/feedback/feedback';
import './Profile.css';
import Title from '../../components/title/title';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Profile() {

  const [feedbacks, setFeedbacks] = useState([]);
  const [activeTab, setActiveTab] = useState('sent');

  useEffect(() => {
    fetchData('sender');
  }, []);

  const onButtonClick = (event) => {
    setFeedbacks([]);
    if (event.target.id === 'profile-sent-button') {
      setActiveTab('sent');
      fetchData('sender');
    } else {
      setActiveTab('receive');
      fetchData('receiver');
    }
  }

  const fetchData = (type) => {

    const headers = {
      'TOKEN': localStorage.getItem('dy') || ''
    }

    Axios.post(`https://lastwordss.com/api/User/getMessages?type=${type}&user=${localStorage.getItem('jd') || ''}`, {
    }, {
      headers
    })
      .then(function (response) {
        console.log(response);
        if (response.data && response.data.code === 200) {
          setFeedbacks(response.data.data);
        } else if (response.data && response.data.code === 400) {
          console.error(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="footer-setter">
      <div className="Profile">
        <Title title1="last" title2="wordss" />
        <div className="profile-subtitle">
          <div className={'subtitle-section' + (activeTab === 'sent' ? ' active' : '')} id="profile-sent-button" onClick={onButtonClick}>Sent</div>
          <div className={'subtitle-section' + (activeTab === 'receive' ? ' active' : '')} id="profile-receive-button" onClick={onButtonClick}>Received</div>
        </div>
        <div className="profile-feedback-list">
          {feedbacks.map((feedback) => {
            return <Feedback key={feedback.id} message={feedback.post} name={activeTab === 'sent' ? feedback.receiver : ''} />
          })}
          {!feedbacks || !feedbacks.length ? 
          <div>It seems no one things you will die....</div>
          : null}
        </div>
      </div>
      <div className="footer">
        <Link to="/share" className="footer-button">Click here</Link> to share link
      </div>
    </div>
  );
}

export default Profile;
