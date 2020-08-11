import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBfz9LD34Ed-KSc32Usn1IopRibhNUIbAk",
    authDomain: "ecommerce-db-83c54.firebaseapp.com",
    databaseURL: "https://ecommerce-db-83c54.firebaseio.com",
    projectId: "ecommerce-db-83c54",
    storageBucket: "ecommerce-db-83c54.appspot.com",
    messagingSenderId: "1054772460700",
    appId: "1:1054772460700:web:0c0ccde0d15538181c4159",
    measurementId: "G-LQ11CQMJ5G"
  }


  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase

