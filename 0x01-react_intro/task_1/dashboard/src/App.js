// task_1/dashboard/src/App.js

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
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
      </footer>
    </div>
  );
}

export default App;
