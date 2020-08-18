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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  // const collectionRef = firestore.collection('users')

  const snapShot = await userRef.get()
  // const collectionSnapShot = await collectionRef.get()
  // console.log({ collection: collectionSnapShot.docs.map(doc => doc.data()) })

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

//added in later for shopData // then we deleted it because we dont want to keep adding data once the component mounts
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef) 

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef,obj)
    console.log(newDocRef)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  },{})
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


