// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app);

export {app, auth, firestore, storage, analytics }