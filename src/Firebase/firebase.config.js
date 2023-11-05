// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQv2gJHOkNs6jtA_sK-_TGWK8GFO_YAJk",
  authDomain: "local-tours-guide.firebaseapp.com",
  projectId: "local-tours-guide",
  storageBucket: "local-tours-guide.appspot.com",
  messagingSenderId: "1025370510678",
  appId: "1:1025370510678:web:7dd374e59cdc64a68772f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app