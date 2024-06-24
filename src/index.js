import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

// Use ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
