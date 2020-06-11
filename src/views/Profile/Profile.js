import React from 'react';
import './Profile.css';

function Profile() {
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
        <div className="subtitle-section">Sent</div>
        <div className="subtitle-section">Received</div>
      </div>
    </div>
  );
}

export default Profile;
