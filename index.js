import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and pass in the root element
const root = ReactDOM.createRoot(rootElement);

// Render the app inside the root with strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
