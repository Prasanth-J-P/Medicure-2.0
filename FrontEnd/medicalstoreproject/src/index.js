import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import AutoLogin from './components/auth/AutoLogin';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
const foot = ReactDOM.createRoot(document.getElementById('foot'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
      <AutoLogin>
      <RouterProvider router = {router } />
      </AutoLogin>
      </Provider>  
  </React.StrictMode>
);

foot.render(
  <React.StrictMode>
    <Footer/> 
  </React.StrictMode>
);

reportWebVitals();