import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// import { getFirestore } from "firebase/firestore";   //yarn add firebase@9.1.0 --save

// import { seedDatabase } from '../seed';

const firebaseConfig = {
    apiKey: "AIzaSyC6yC5Od7LAUoo9AShMXZQOpyUSMOXWt1I",
    authDomain: "netflix-4f633.firebaseapp.com",
    projectId: "netflix-4f633",
    storageBucket: "netflix-4f633.appspot.com",
    messagingSenderId: "330765608004",
    appId: "1:330765608004:web:bce0122fdb0b0005bb0811"
};


const firebaseApp = initializeApp(firebaseConfig);
// const firebaseDb = getFirestore();
// seedDatabase(firebaseApp); //them du lieu vao firestore
export { firebaseApp };
