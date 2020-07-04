import React from 'react';
import { View } from 'react-native';
import Logo from './components/logo';
import firebase from './lib/firebase';
import Player from './components/player';
import Splash from './splash';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import List from './list';

const client = new ApolloClient({
	uri: 'https://us-central1-samplage-d938b.cloudfunctions.net/api/',
});

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
		<ApolloProvider client={client}>
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
			<List />
		</ApolloProvider>
	);
};

export default App;
