import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from './helpers/i18next';
import 'normalize.css'
import './styles/globals.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);