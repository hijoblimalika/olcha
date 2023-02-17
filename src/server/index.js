import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnxkhoUR7kWHGcsdMXDDZHB-p2TrtABEc",
    authDomain: "new-brand-e587b.firebaseapp.com",
    projectId: "new-brand-e587b",
    storageBucket: "new-brand-e587b.appspot.com",
    messagingSenderId: "452487507086",
    appId: "1:452487507086:web:3c744d372f3e0866206ddf",
    measurementId: "G-7LEYH4H5ZM"
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

