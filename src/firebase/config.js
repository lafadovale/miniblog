import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq1FBgqyGcM3PVFH5jmedlmb1XtluwohU",
  authDomain: "miniblog-battisti.firebaseapp.com",
  projectId: "miniblog-battisti",
  storageBucket: "miniblog-battisti.appspot.com",
  messagingSenderId: "789225042938",
  appId: "1:789225042938:web:4f74dbb226e7e0750daa43",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
