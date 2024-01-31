// task_2/dashboard/src/App.js

import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* existing header code */}
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Add labels and inputs for email and password */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>

        {/* Add a button with the text "OK" */}
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
      </footer>
    </div>
  );
}

export default App;
