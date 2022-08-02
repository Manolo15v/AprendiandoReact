// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNCZfbjmr_lxGkzoWxSjsUTm6mu6XLdQ8",
  authDomain: "tiendareactproyect.firebaseapp.com",
  projectId: "tiendareactproyect",
  storageBucket: "tiendareactproyect.appspot.com",
  messagingSenderId: "767719692362",
  appId: "1:767719692362:web:2d063da4f6f4d5bda26eb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function initFirebase() {
  return app
}
