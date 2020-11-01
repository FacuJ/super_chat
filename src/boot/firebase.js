// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import { firebase } from '@firebase/app';

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
  apiKey: 'AIzaSyDP604vVIq7Omkhe6jv0YpcyYi4Ifp8_gw',
  authDomain: 'super-chat-quasar.firebaseapp.com',
  databaseURL: 'https://super-chat-quasar.firebaseio.com',
  projectId: 'super-chat-quasar',
  storageBucket: 'super-chat-quasar.appspot.com',
  messagingSenderId: '159356999098',
  appId: '1:159356999098:web:35e3fe06d16f86e22c3983'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth ()
const firebaseDb = firebaseApp.database ()

export {firebaseAuth, firebaseDb}
