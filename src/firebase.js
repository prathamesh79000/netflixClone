// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCAMX_C0GElbb59_M0GacSOz3xXARv0nP4",
    authDomain: "netflix-clone2-b16aa.firebaseapp.com",
    projectId: "netflix-clone2-b16aa",
    storageBucket: "netflix-clone2-b16aa.appspot.com",
    messagingSenderId: "793868489950",
    appId: "1:793868489950:web:f185e3df4b89e94c039e4f",
    measurementId: "G-T5YEQYP3NB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth};
export default db;