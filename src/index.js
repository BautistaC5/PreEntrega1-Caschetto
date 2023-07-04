import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPQ6FILxMmZekoVskC8QEPUKbU_o3hQa0",
  authDomain: "tienda-bautista.firebaseapp.com",
  projectId: "tienda-bautista",
  storageBucket: "tienda-bautista.appspot.com",
  messagingSenderId: "480126563416",
  appId: "1:480126563416:web:82eb31096bb0b23509862d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);