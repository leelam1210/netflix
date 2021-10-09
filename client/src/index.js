import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';

import { GlobalStyles } from './global-styles';
import { firebaseApp } from './firebase/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebaseApp }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);