import firebase from '../lib/firebase';
import {
	GoogleSignin,
	GoogleSigninButton,
	statusCodes,
} from '@react-native-community/google-signin';

export default class AuthService {
	public async login() {
		try {
			GoogleSignin.configure({
				// scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
				// offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
				// hostedDomain: '', // specifies a hosted domain restriction
				// loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
				// forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
				// accountName: '', // [Android] specifies an account name on the device that should be used
				// iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
			});
			// Get the users ID token
			const { idToken } = await GoogleSignin.signIn();

			// Create a Google credential with the token
			const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken);

			// Sign-in the user with the credential
			return firebase.auth().signInWithCredential(googleCredential);
		} catch (error) {
			console.log('error');
			console.log(JSON.stringify(error));
			// if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			// 	// user cancelled the login flow
			// } else if (error.code === statusCodes.IN_PROGRESS) {
			// 	// operation (e.g. sign in) is in progress already
			// } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
			// 	// play services not available or outdated
			// } else {
			// 	// some other error happened
			// }
		}
	}
}
