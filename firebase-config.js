import { initializeApp } from "firebase/app";
   import { getAnalytics } from "firebase/analytics";
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyBkRsLDDkITPdFKP9pHO1YhEiD4QZWr1Vw",
     authDomain: "coach-kip-d6793.firebaseapp.com",
     projectId: "coach-kip-d6793",
     storageBucket: "coach-kip-d6793.firebasestorage.app",
     messagingSenderId: "170697876230",
     appId: "1:170697876230:web:bf79a8508d1f9f73523487",
     measurementId: "G-QMD5MYZ5Y4"
   };
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
   