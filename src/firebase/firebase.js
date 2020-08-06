import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBw29pGhrj-1B_6-qRX3_vFMzyQPuSqUo8",
  authDomain: "zains-clothing.firebaseapp.com",
  databaseURL: "https://zains-clothing.firebaseio.com",
  projectId: "zains-clothing",
  storageBucket: "zains-clothing.appspot.com",
  messagingSenderId: "149305197608",
  appId: "1:149305197608:web:21e5010d76877c55df611d",
  measurementId: "G-ND30SDCSK3"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

