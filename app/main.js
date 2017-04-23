// import 'babel-polyfill';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import createStore from './store';

const store = createStore();

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
