import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBK_DMZFSPN2XVbm5MQxdkKHJQKKcUceRs",
  authDomain: "fir-lesson-b7cd6.firebaseapp.com",
  databaseURL: "https://fir-lesson-b7cd6.firebaseio.com",
  projectId: "fir-lesson-b7cd6",
  storageBucket: "fir-lesson-b7cd6.appspot.com",
  messagingSenderId: "893423027736",
  appId: "1:893423027736:web:57692dc27f7937c81e256d",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
