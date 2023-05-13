// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWPxvGgVRJ5oSx71jOylIFtcL86ZxciQA",
  authDomain: "luciecestuje.firebaseapp.com",
  projectId: "luciecestuje",
  storageBucket: "luciecestuje.appspot.com",
  messagingSenderId: "237005623966",
  appId: "1:237005623966:web:a95a308bd17bb3eb7ca18f",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
