

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DashboardProvider } from './DashboardContext';
import './index.css'; // Move this import to the last

ReactDOM.render(
  <DashboardProvider>
    <App />
  </DashboardProvider>,
  document.getElementById('root')
);
