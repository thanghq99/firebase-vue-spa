import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC2ElyoI6sTxYKC5ahnitplVYRbYiOGo_E",
  authDomain: "csdl-dong-vat.firebaseapp.com",
  projectId: "csdl-dong-vat",
  storageBucket: "csdl-dong-vat.appspot.com",
  messagingSenderId: "938838256038",
  appId: "1:938838256038:web:730315c343642fd0f94767"
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();