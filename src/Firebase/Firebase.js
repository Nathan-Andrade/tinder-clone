import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCzkWV5knkx45iwBM8lAqrvAq7myHJwovQ",
  authDomain: "tinder-clone-f90c9.firebaseapp.com",
  databaseURL: "https://tinder-clone-f90c9.firebaseio.com",
  projectId: "tinder-clone-f90c9",
  storageBucket: "tinder-clone-f90c9.appspot.com",
  messagingSenderId: "696614320351",
  appId: "1:696614320351:web:627f71ad335b753e41116a",
  measurementId: "G-NZ760LQ0HF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;