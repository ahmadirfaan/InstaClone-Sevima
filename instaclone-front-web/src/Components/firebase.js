import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCdolHrNF-6cNxBRv0xzd_f6VObvcoZzws",
    authDomain: "instaclone-d8d57.firebaseapp.com",
    projectId: "instaclone-d8d57",
    storageBucket: "instaclone-d8d57.appspot.com",
    messagingSenderId: "49667978424",
    appId: "1:49667978424:web:b1b4f518248c6b8917f04d",
    measurementId: "G-4MZSE4YFMM"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();

export {storage, auth}