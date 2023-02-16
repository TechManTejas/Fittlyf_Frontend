import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDklCP-kQ1EWDWM1MB1SSNfQUR58auI7y0",
  authDomain: "fittlyf-store.firebaseapp.com",
  projectId: "fittlyf-store",
  storageBucket: "fittlyf-store.appspot.com",
  messagingSenderId: "582815820123",
  appId: "1:582815820123:web:b226cfc1ee22350aa0927e",
  measurementId: "G-PJD7715ZWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

// import {initializeApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDklCP-kQ1EWDWM1MB1SSNfQUR58auI7y0",
//   authDomain: "fittlyf-store.firebaseapp.com",
//   projectId: "fittlyf-store",
//   storageBucket: "fittlyf-store.appspot.com",
//   messagingSenderId: "582815820123",
//   appId: "1:582815820123:web:b226cfc1ee22350aa0927e",
//   measurementId: "G-PJD7715ZWF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);