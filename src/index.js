import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const contentElement = document.getElementById('root');
const root = ReactDOM.createRoot(contentElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


