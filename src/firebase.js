import firebase from 'firebase/app';
import 'firebase/messaging';
import "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  databaseURL: process.env.REACT_APP_databaseURL,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let messaging;
if(firebase.messaging.isSupported()) {
    messaging = firebase.messaging();
}

const vapidKey =  process.env.REACT_APP_vapidKey

export const getToken = (setTokenFound) => {
  if (!messaging) {
    setTokenFound(null);
    return;
  }

  return messaging.getToken({ vapidKey }).then((currentToken) => {
    if (currentToken) {
      localStorage.setItem('fcmNotificationToken', currentToken);
     
      setTokenFound(currentToken);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(null);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}


export const database = firebase.database();