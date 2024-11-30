import { initializeApp } from "firebase/app";
import { getStorage, ref as storeRef, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as DBref, child, get } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_DATABASE_API_KEY,
    authDomain: process.env.REACT_APP_DATABASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_DATABASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DATABASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DATABASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_DATABASE_APP_ID,
    measurementId: process.env.REACT_APP_DATABASE_MEASUREMENT_ID
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase(app);
const analytics = getAnalytics(app);

export async function getData(filepath){
    const dbRef = DBref(db);
    let snapshot = await get(child(dbRef, filepath))

    if (snapshot.exists()) {
        return snapshot.val()
    } else {
        return null
    }
}
export async function getImageURL(filepath){
    let url
    if (filepath.includes('http')){
        url = filepath
    }
    else {
        url = await getDownloadURL(storeRef(storage,filepath))
    }
    return url
}

