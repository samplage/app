import React from 'react';
import { View } from 'react-native';
import Logo from './components/logo';
import firebase from './lib/firebase';
import Player from './components/player';
import Splash from './splash';

const App = () => {
	const [sampleUrl, setSampleUrl] = React.useState();
	const [isPlaying, setIsPlaying] = React.useState();

	React.useEffect(() => {
		firebase
			.auth()
			.signInAnonymously()
			.catch(function (error) {
				console.log(error);
			});

		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				const sample = firebase.storage().ref('rocky_balboa-it_aint_about_how_hard_you_hit.mp3');
				sample.getDownloadURL().then((url) => {
					console.log(url);
					setSampleUrl(url);
				});
			}
		});
	}, []);

	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				flex: 1,
			}}
		>
			<Splash />

			<Logo animate={isPlaying} />
			{sampleUrl && <Player url={sampleUrl} onPlaying={setIsPlaying} />}
		</View>
	);
};

export default App;
