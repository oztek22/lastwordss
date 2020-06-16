import React from 'react';
import { DISASTER_LIST } from '../../constants/constants';
import Check from '../check/check';
import Uncheck from '../check/uncheck';
import "./disasterList.css";

function DisasterList() {

	return (
    <div className="disaster">
      {
        DISASTER_LIST.map(disaster => {
          return <div key={disaster.name} className="disaster-list">
                    <span className="disaster-checkbox">{disaster.isChecked ? <Check /> : <Uncheck /> }</span>
                    <span className="disaster-text">{ disaster.name }</span>
                  </div>
        })
      }
    </div>

	)
}

export default DisasterList;
