import app from 'firebase/app';
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDvnZWqsR5wgWHxizinkrzO6XjaB96UNZU",
  authDomain: "fir-05-95719.firebaseapp.com",
  projectId: "fir-05-95719",
  storageBucket: "fir-05-95719.firebasestorage.app",
  messagingSenderId: "575215217481",
  appId: "1:575215217481:web:624f208987106b7a130898"
};


app.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
