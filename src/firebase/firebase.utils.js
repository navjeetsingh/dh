import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDct4DfiX9iDA2OCrt8a4b1KkwGrqme3hc',
	authDomain: 'dh-db-1ce1a.firebaseapp.com',
	databaseURL: 'https://dh-db-1ce1a.firebaseio.com',
	projectId: 'dh-db-1ce1a',
	storageBucket: 'dh-db-1ce1a.appspot.com',
	messagingSenderId: '694056082416',
	appId: '1:694056082416:web:22f2539f817b5082739b35',
	measurementId: 'G-KL43731VJ8'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
