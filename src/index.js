import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ColorSchemesExample from './ColorSchemesExample';
import 'bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ColorSchemesExample/>
    <App />
  </React.StrictMode>,
);
