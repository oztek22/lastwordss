import React, { useEffect, useState } from 'react';
import Feedback from '../../components/feedback/feedback';
import './Profile.css';
import Title from '../../components/title/title';

function Profile() {

  const dummyFeedbacks = [
    {message: "After you die, I'll get your macbook.", sender: "aflatoon", receiver: "makichu", id: 1},
    {message: "After you die, I'll get your laptop.", sender: "aflatoon", receiver: "makichu", id: 2},
    {message: "After you die, I'll get your bike.", sender: "aflatoon", receiver: "makichu", id: 3},
    {message: "After you die, I'll get your car.", sender: "aflatoon", receiver: "makichu", id: 4},
    {message: "After you die, I'll get your house.", sender: "aflatoon", receiver: "makichu", id: 5},
    {message: "After you die, I'll get your money.", sender: "aflatoon", receiver: "makichu", id: 6},
    {message: "After you die, I'll get your wife.", sender: "aflatoon", receiver: "makichu", id: 7},
    {message: "After you die, I'll get your girlfriend.", sender: "aflatoon", receiver: "makichu", id: 8},
    {message: "After you die, I'll get your macbook.", sender: "aflatoon", receiver: "makichu", id: 9},
    {message: "After you die, I'll get your macbook.", sender: "aflatoon", receiver: "makichu", id: 10},
    {message: "After you die, I'll get your macbook.", sender: "aflatoon", receiver: "makichu", id: 11},
    {message: "After you die, I'll get your macbook, laptop, bike, car, house, money, wife and girlfriend.", sender: "aflatoon", receiver: "makichu", id: 12}
  ];

  const [feedbacks, setFeedbacks] = useState(dummyFeedbacks);
  const [activeTab, setActiveTab] = useState('sent');

  const onButtonClick = (event) => {
    if (event.target.id === 'profile-sent-button' ) {
      setFeedbacks(dummyFeedbacks);
      setActiveTab('sent');
    } else {
      setFeedbacks(dummyFeedbacks.reverse());
      setActiveTab('receive');
    }
  }

  return (
    <div className="Profile">
      <Title title1="last" title2="wordss" />
      <div className="profile-subtitle">
        <div className={'subtitle-section' + (activeTab === 'sent' ? ' active' : '')} id="profile-sent-button" onClick={onButtonClick}>Sent</div>
        <div className={'subtitle-section' + (activeTab === 'receive' ? ' active' : '')} id="profile-receive-button" onClick={onButtonClick}>Received</div>
      </div>
      <div className="profile-feedback-list">
        {feedbacks.map((feedback) => {
          return <Feedback key={feedback.id} message={feedback.message} name={feedback.receiver} />
        })}
      </div>
    </div>
  );
}

export default Profile;
