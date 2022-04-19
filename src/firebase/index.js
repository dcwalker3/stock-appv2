import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB1FnKCPDQZXa7940JPDE3KZKLN-xgjQvI",
    authDomain: "stock-appv2.firebaseapp.com",
    projectId: "stock-appv2",
    storageBucket: "stock-appv2.appspot.com",
    messagingSenderId: "571476930070",
    appId: "1:571476930070:web:b9aa1a9d0242c99ab3cf37",
    measurementId: "G-DTTBVX0J71"
});

export const auth = app.auth();
export default app;