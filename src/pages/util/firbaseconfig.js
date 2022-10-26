import { initializeApp } from "firebase/app";
import { getStorage, ref as storeRef, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as DBref, child, get } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB1tQXkBOH5IR7R5bxYNBMy4Id3uG6A5Wo",
    authDomain: "pghs-guide.firebaseapp.com",
    databaseURL: "https://pghs-guide-default-rtdb.firebaseio.com",
    projectId: "pghs-guide",
    storageBucket: "pghs-guide.appspot.com",
    messagingSenderId: "267578978028",
    appId: "1:267578978028:web:f28077d3956667a2353fc9",
    measurementId: "G-RS2N8K81E0"
  };

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
    let url = await getDownloadURL(storeRef(storage,filepath))
    return url
}

