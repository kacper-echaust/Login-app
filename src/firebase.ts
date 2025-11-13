import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxXoG9TA-vrAqBpRMIbKCMBsvCaV_NdGs",
  authDomain: "loginapp-e10e2.firebaseapp.com",
  projectId: "loginapp-e10e2",
  storageBucket: "loginapp-e10e2.firebasestorage.app",
  messagingSenderId: "682377105827",
  appId: "1:682377105827:web:df35add483dbfb29c94a16",
  measurementId: "G-WPKG8CTQM4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
