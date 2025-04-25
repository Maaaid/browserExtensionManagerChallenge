// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO7TNIzap0jnjRwHuStPa7I0scHlKBXmw",
  authDomain: "extensionmanagerchallenge.firebaseapp.com",
  projectId: "extensionmanagerchallenge",
  storageBucket: "extensionmanagerchallenge.firebasestorage.app",
  messagingSenderId: "421441855523",
  appId: "1:421441855523:web:eff04fe3657604e2845196",
  measurementId: "G-D51RQQBXP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
