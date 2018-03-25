import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
  apiKey: "AIzaSyCt-0u-2rnzJzVVHknMvzE5ihukJWEr8Ug",
  authDomain: "quick-todo-72eae.firebaseapp.com",
  databaseURL: "https://quick-todo-72eae.firebaseio.com",
  projectId: "quick-todo-72eae",
  storageBucket: "quick-todo-72eae.appspot.com",
  messagingSenderId: "146781395587"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;
