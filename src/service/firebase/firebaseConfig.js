import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtl9kyZztvTLCFeTbbEN6lrV-QUlLjqkU",
  authDomain: "donna-civetta.firebaseapp.com",
  projectId: "donna-civetta",
  storageBucket: "donna-civetta.appspot.com",
  messagingSenderId: "224627349997",
  appId: "1:224627349997:web:218c9d1e60b5175c796fe4"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)