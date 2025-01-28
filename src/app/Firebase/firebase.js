import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"

import { getAuth } from "firebase/auth"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBcTDp86nMpp8p6qWvE20GLc-qfXit7ok0",
  authDomain: "x-clone-c0341.firebaseapp.com",
  projectId: "x-clone-c0341",
  storageBucket: "x-clone-c0341.appspot.com",
  messagingSenderId: "842086107910",
  appId: "1:842086107910:web:4e23f6e041686ff04e2c87",
  measurementId: "G-MZDN8QVZLT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const storage = getStorage(app)

export { app, auth, provider, storage };