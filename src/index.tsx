import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Styles/MainStyles.css"
import "./Widget/Navbar/navbar.css"
import { Provider } from 'react-redux';
import { store } from './Store/Store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

