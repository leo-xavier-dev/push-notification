importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');

firebase.initializeApp({ 
  apiKey: "AIzaSyCrMdfJ31nYg3I161w7ympxihPT2OEK4wY",
  authDomain: "mmp5-gcdev-push.firebaseapp.com",
  projectId: "mmp5-gcdev-push",
  storageBucket: "mmp5-gcdev-push.appspot.com",
  messagingSenderId: "131502114715",
  appId: "1:131502114715:web:7c55711d33d4bfefff433e",
  measurementId: "G-HSHGG7FGBM"
});

const messaging = firebase.messaging();


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCrMdfJ31nYg3I161w7ympxihPT2OEK4wY",
//   authDomain: "mmp5-gcdev-push.firebaseapp.com",
//   projectId: "mmp5-gcdev-push",
//   storageBucket: "mmp5-gcdev-push.appspot.com",
//   messagingSenderId: "131502114715",
//   appId: "1:131502114715:web:7c55711d33d4bfefff433e",
//   measurementId: "G-HSHGG7FGBM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);