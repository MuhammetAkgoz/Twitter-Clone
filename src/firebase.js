// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiFldky6HwJItkalWPIbRf8Zv8Ex8q9OQ",
  authDomain: "twitter---clone-e9b92.firebaseapp.com",
  projectId: "twitter---clone-e9b92",
  storageBucket: "twitter---clone-e9b92.appspot.com",
  messagingSenderId: "763910910438",
  appId: "1:763910910438:web:d1bafdc4a9ddbac8556627",
  measurementId: "G-D0ZGD51XEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export default db;

