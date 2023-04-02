import firebase from 'firebase/app'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA07Bb9buR-0Kukn099WfYKrg-nBGcQoGE",
  authDomain: "shop-now-4b365.firebaseapp.com",
  projectId: "shop-now-4b365",
  storageBucket: "shop-now-4b365.appspot.com",
  messagingSenderId: "35893602962",
  appId: "1:35893602962:web:95ae43eb0af72d599d544b"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }