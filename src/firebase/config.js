import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDj95ulUe-UMbhl44WYQhQFttm28R7ZDEs",
    authDomain: "finance-app-d54e8.firebaseapp.com",
    projectId: "finance-app-d54e8",
    storageBucket: "finance-app-d54e8.appspot.com",
    messagingSenderId: "569798277927",
    appId: "1:569798277927:web:a69d4e705e9110ca168702"
  };

// firebase init
firebase.initializeApp(firebaseConfig);

// init firestore services
const projectFirestore = firebase.firestore()

// init auth
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth }