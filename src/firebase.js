import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA9bgyn...',
  authDomain: 'ffl-call.firebaseapp.com',
  databaseURL: 'https://ffl-call-default-rtdb.firebaseio.com',
  projectId: 'ffl-call',
  storageBucket: 'ffl-call.appspot.com',
  messagingSenderId: '903717345641',
  appId: '1:903717345641:web:13e58cb37decc2427c45f8',
  measurementId: 'G-945XCHB08M',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };