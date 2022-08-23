import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4wnfcwZ2rFGcKtCHQ0G5bXrmpLM6WAnE",
  authDomain: "product-catalog-ng.firebaseapp.com",
  projectId: "product-catalog-ng",
  storageBucket: "product-catalog-ng.appspot.com",
  messagingSenderId: "215820109562",
  appId: "1:215820109562:web:87d7c2211388b7a8d1ab43",
  measurementId: "G-2GKXQSWVXC",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore }