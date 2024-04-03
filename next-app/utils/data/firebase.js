// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAZTgKG6un1AhXeveUTdmOTGZmWRCDa1Wk",
//   authDomain: "namedropper-dab51.firebaseapp.com",
//   projectId: "namedropper-dab51",
//   storageBucket: "namedropper-dab51.appspot.com",
//   messagingSenderId: "370895091527",
//   appId: "1:370895091527:web:132e5fed249b64045bbe62",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZTgKG6un1AhXeveUTdmOTGZmWRCDa1Wk",
  authDomain: "namedropper-dab51.firebaseapp.com",
  projectId: "namedropper-dab51",
  storageBucket: "namedropper-dab51.appspot.com",
  messagingSenderId: "370895091527",
  appId: "1:370895091527:web:132e5fed249b64045bbe62",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
