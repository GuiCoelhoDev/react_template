import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ColorsProvider from "./assets/styles/ColorsProvider"
import GlobalStyle from "./assets/styles/global"


ReactDOM.render(
  <React.StrictMode>
    <ColorsProvider>
      <GlobalStyle />

      <App />

    </ColorsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
