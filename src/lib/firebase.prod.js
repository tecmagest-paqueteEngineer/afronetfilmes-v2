import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1. when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyDWubRYaBgKh5n2o7Ij9YXMjTERnTuyQrw",
    authDomain: "afronetfilmes.firebaseapp.com",
    projectId: "afronetfilmes",
    storageBucket: "afronetfilmes.appspot.com",
    messagingSenderId: "138180564649",
    appId: "1:138180564649:web:0953815366ec0799a5fbb8"
};

const firebase = Firebase.initializeApp(config);

    // 2. when seeding the database you'll have to uncomment this!
    // seedDatabase(firebase);
    // 3. once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };