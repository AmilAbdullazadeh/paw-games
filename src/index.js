import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './assets/style/global.css';
import { Provider } from 'react-redux';
import reducer from './store';
import { createStore } from 'redux';

const x = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={x}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
