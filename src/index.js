import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css'
import App from './App';
import { DarkModeProvider } from './components/context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DarkModeProvider>
);
