import { App } from '@components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter /* basename="/movies-finder" */>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
