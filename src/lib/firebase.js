import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDXVttjsavJq0TBiJBFpDcbyfjn0i7gARE',
  authDomain: 'naturistconnect-62015.firebaseapp.com',
  projectId: 'naturistconnect-62015',
  storageBucket: 'naturistconnect-62015.appspot.com',
  messagingSenderId: '618132523649',
  appId: '1:618132523649:web:e5bdc81c634d8b4af9db80',
  measurementId: 'G-YMXLV18493'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
