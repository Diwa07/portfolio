

import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyCP1dokmShzPB9dLfKyh-6mmsH0ruej1r8",
  authDomain: "portfolio-ea33c.firebaseapp.com",
  projectId: "portfolio-ea33c",
  storageBucket: "portfolio-ea33c.appspot.com",
  messagingSenderId: "900948947247",
  appId: "1:900948947247:web:73b35d66e5bcce206571da",
  measurementId: "G-E0XX5NZK40",

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
