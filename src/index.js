import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyCpmVR_z_Cbcc_LGC2xScQDZS7DRgypeV4",
    authDomain: "chat-react-e4121.firebaseapp.com",
    projectId: "chat-react-e4121",
    storageBucket: "chat-react-e4121.appspot.com",
    messagingSenderId: "886854760517",
    appId: "1:886854760517:web:48d925414ad24bfd0acb2c"
  });
  

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

