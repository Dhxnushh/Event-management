// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore,collection} from 'firebase/firestore'
import { ref,getStorage } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';



const firebaseConfig = {
  apiKey: "AIzaSyDTYLEQf0Q97fnUaU6pFszrB5eJoiuoScg",
  authDomain: "event-management-sist-50ccc.firebaseapp.com",
  databaseURL: "https://event-management-sist-50ccc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "event-management-sist-50ccc",
  storageBucket: "event-management-sist-50ccc.appspot.com",
  messagingSenderId: "34795774464",
  appId: "1:34795774464:web:0750740762a5664fcaaee5",
  measurementId: "G-JMD1H6VPXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const Eventsref = collection(db,"Events");
const storage = getStorage();
export const storageRef = ref(storage, `images/${uuidv4()}.jpg`);
