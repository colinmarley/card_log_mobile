import { firebase, getApps, initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import {
    API_KEY, AUTH_DOMAIN, DATABASE_URL,
    PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID,
    APP_ID, MEASUREMENT_ID,
} from '@env'

var firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};
console.log(firebaseConfig)

const app = (!getApps().length) ? initializeApp(firebaseConfig) : null
// const app = initializeApp(firebaseConfig);
console.log("App Name: ", app?.name)
const db = getFirestore(app)
// console.log("got db", db)
const auth = getAuth(app)
console.log(db)
console.log(auth)

export { firebase, auth, db };
