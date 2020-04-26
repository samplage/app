import React from 'react';
import { View } from 'react-native';
import Logo from './components/logo';
import firebase from './lib/firebase';
import Player from './components/player';

const App = () => {
	const [sampleUrl, setSampleUrl] = React.useState();

	React.useEffect(() => {
		const sample = firebase.storage().ref('rocky_balboa-it_aint_about_how_hard_you_hit.mp3');
		sample.getDownloadURL().then((url) => {
			console.log(url);
			setSampleUrl(url);
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
			<Logo />
			{sampleUrl && <Player url={sampleUrl} />}
		</View>
	);
};

export default App;
