import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBomZiQrZkm5V5XX-vQMk_nZC-ttBn7lH0",
    authDomain: "whatsapp-clone-4a0b8.firebaseapp.com",
    projectId: "whatsapp-clone-4a0b8",
    storageBucket: "whatsapp-clone-4a0b8.appspot.com",
    messagingSenderId: "417457599668",
    appId: "1:417457599668:web:6ab40b4f3e2dd4c69413e1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;;