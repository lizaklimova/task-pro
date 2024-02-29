import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'modern-normalize';
import './index.css';
import App from 'components/App';
import { store } from './redux/store';
import '../src/assets/i18/i18';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/task-pro">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
