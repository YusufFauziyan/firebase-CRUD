import { initializeApp } from 'firebase/app';
import { 
    getFirestore ,
    collection,
    getDocs
  } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl2a_PrYK-D9WK2AL89BfM-BIBWqqEwok",
    authDomain: "todo-app-5ad21.firebaseapp.com",
    projectId: "todo-app-5ad21",
    storageBucket: "todo-app-5ad21.appspot.com",
    messagingSenderId: "1046997396981",
    appId: "1:1046997396981:web:03cdb363a73424396dc4bc",
    measurementId: "G-RSWNH28X1Q"
  };
  
    //init firebase app
    initializeApp(firebaseConfig);
  
    // init service
   export const db = getFirestore()