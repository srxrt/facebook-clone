import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDtCDkNbrlklIYjJMPHMchtUaMGsCZh0M4',
	authDomain: 'facebook-clone-6d471.firebaseapp.com',
	projectId: 'facebook-clone-6d471',
	storageBucket: 'facebook-clone-6d471.appspot.com',
	messagingSenderId: '187332627267',
	appId: '1:187332627267:web:28311ec524de1952b83df6',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const storage = firebase.storage();
export { db, storage };
