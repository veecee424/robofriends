import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App'
import './index.css'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { searchRobots } from './reducers'
import reportWebVitals from './reportWebVitals';

const Logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(Logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
