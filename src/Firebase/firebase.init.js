// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

/* 
apiKey: "AIzaSyDegSkj2ax75L6GOUsQKWpptMfObibM_gA",
  authDomain: "monikas-therapy-auth.firebaseapp.com",
  projectId: "monikas-therapy-auth",
  storageBucket: "monikas-therapy-auth.appspot.com",
  messagingSenderId: "848990114994",
  appId: "1:848990114994:web:297be88c22738cccf8a5ab",
*/
