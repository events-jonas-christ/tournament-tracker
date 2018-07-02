
import firebase from 'firebase';

// Initialize Firebase


const config = {
    apiKey: 'AIzaSyBAYKz6I0b9oTbCtdq12HnSkt9uyAQAWUo',
    authDomain: 'vue-base-4cb40.firebaseapp.com',
    databaseURL: 'https://vue-base-4cb40.firebaseio.com',
    projectId: 'vue-base-4cb40',
    storageBucket: '',
    messagingSenderId: '986349407099',
};

export const firebaseApp = firebase.initializeApp(config)
export const database = firebaseApp.database()
