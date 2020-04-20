import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

// const config = {
// 	apiKey: process.env.REACT_APP_API_KEY,
// 	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASE_URL,
// 	projectId: process.env.REACT_APP_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// 	// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// 	// appId: process.env.REACT_APP_ID,
// };

// if (!firebase.apps.length) {
// 	firebase.initializeApp(config);
// }

// console.log(firebase.apps);
/**
 * Context
 */
// export const FirebaseContext = React.createContext(firebase);

/**
 * Auth
 */
// @ts-ignore
// export const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();

// export default firebase;

export default { auth, storage };
