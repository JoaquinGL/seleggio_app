import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
// Firebase config
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBnmFI3gjV0xbaz4BTX3jgkGOCSFv80IUM',
      authDomain: 'manager-699db.firebaseapp.com',
      databaseURL: 'https://manager-699db.firebaseio.com',
      projectId: 'manager-699db',
      storageBucket: 'manager-699db.appspot.com',
      messagingSenderId: '61499983257'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
