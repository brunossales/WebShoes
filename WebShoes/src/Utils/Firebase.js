import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import firebaseConfig from '../keys/FirebaseKey'

export default class Firebase {
    constructor(){
        this.app = firebase.initializeApp(firebaseConfig)
        this.user = null
    }

    getFirestoreDb(){
        return firebase.firestore()
    }
}