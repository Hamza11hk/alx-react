// task_2/dashboard/src/Notifications.js

import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

export default function Notifications() {
  const closeNotification = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{ float: 'right' }}
        aria-label="Close"
        onClick={closeNotification}
      >
        <img src={closeIcon} alt="close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}
