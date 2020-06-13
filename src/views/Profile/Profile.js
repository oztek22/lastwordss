import React, { useEffect, useState } from 'react';
import Feedback from '../../components/feedback/feedback';
import './Profile.css';

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

  const [feedbacks, setFeedbacks] = useState([]);

  const onButtonClick = (event) => {
    if (event.target.id === 'profile-sent-button' ) {
      setFeedbacks(dummyFeedbacks);
    } else {
      setFeedbacks(dummyFeedbacks.reverse());
    }
  }

  useEffect(() => {
    setFeedbacks(dummyFeedbacks);
  }, [dummyFeedbacks]);

  return (
    <div className="Profile">
      <div className="profile-header">
        <div className="profile-title">
          Profile
        </div>
        <div className="profile-description">
          message
        </div>
      </div>
      <div className="profile-subtitle">
        <div className="subtitle-section" id="profile-sent-button" onClick={onButtonClick}>Sent</div>
        <div className="subtitle-section" id="profile-receive-button" onClick={onButtonClick}>Received</div>
      </div>
      <div className="profile-feedback-list">
        {feedbacks.map((feedback) => {
          return <Feedback key={feedback.id} message={feedback.message} />
        })}
      </div>
    </div>
  );
}

export default Profile;
