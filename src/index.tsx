import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { store } from './store/store';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode> <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
);