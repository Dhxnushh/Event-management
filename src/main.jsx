import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTYLEQf0Q97fnUaU6pFszrB5eJoiuoScg",
  authDomain: "event-management-sist-50ccc.firebaseapp.com",
  projectId: "event-management-sist-50ccc",
  storageBucket: "event-management-sist-50ccc.appspot.com",
  messagingSenderId: "34795774464",
  appId: "1:34795774464:web:7e636f06d27cb015caaee5",
  measurementId: "G-5RVV1HKT79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
