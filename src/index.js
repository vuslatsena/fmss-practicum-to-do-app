import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

// Create a root for the app to render in
const root = ReactDOM.createRoot(rootElement);

// Render the app inside the root with strict mode enabled
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
