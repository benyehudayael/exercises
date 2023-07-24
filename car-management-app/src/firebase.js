import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_e00KT-1na-hbs0SfnIkX0egDcNy8Bzk",
    authDomain: "car-management-app-68579.firebaseapp.com",
    projectId: "car-management-app-68579",
    storageBucket: "car-management-app-68579.appspot.com",
    messagingSenderId: "662917514689",
    appId: "1:662917514689:web:a8a00d1773df44fcc05b40",
    measurementId: "G-C4D48H34Y9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;