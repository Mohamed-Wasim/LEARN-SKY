import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import reportWebVitals from './reportWebVitals';
import i18n from './lang';
import App from './App';
import store from './store/store';

const persistor = persistStore(store);
const container = document.getElementById('root');
const rootDom = createRoot(container);

rootDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n} defaultNS="translation">
        <App />
        <ToastContainer />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

persistor.persist();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
