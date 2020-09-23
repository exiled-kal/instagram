import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC9gYB1L62eTkWfjgY0UyGohbo0JX90Xi4',
  authDomain: 'instagrammern-6fab0.firebaseapp.com',
  databaseURL: 'https://instagrammern-6fab0.firebaseio.com',
  projectId: 'instagrammern-6fab0',
  storageBucket: 'instagrammern-6fab0.appspot.com',
  messagingSenderId: '370013401777',
  appId: '1:370013401777:web:7bd643e4784085cc88e890',
  measurementId: 'G-FSBY3G65Y3',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
