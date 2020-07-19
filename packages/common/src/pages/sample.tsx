import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Logo from '../components/logo';
import firebase from '../lib/firebase';
import Player from '../components/player';

const Sample = (): React.ReactElement => {
	const [sampleUrl, setSampleUrl] = React.useState();
	const [isPlaying, setIsPlaying] = React.useState();
	const route = useRoute();
	const id = route.params.id.split('-').pop();
	const { loading, error, data } = useQuery(gql`
		{
			sample(id: "${id}") {
				name
				transcription
				file
			}
		}
	`);

	React.useEffect(() => {
		if (!data) {
			return;
		}

		firebase
			.auth()
			.signInAnonymously()
			.catch(function (error) {
				console.log(error);
			});

		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				const sample = firebase.storage().ref(data.sample.file);
				sample.getDownloadURL().then((url) => {
					setSampleUrl(url);
				});
			}
		});
	}, [data]);

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error :(</Text>;

	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				flex: 1,
			}}
		>
			<View style={{ maxWidth: 400 }}>
				<Logo animate={isPlaying} />
				<Text style={{ fontSize: 18 }}>{data.sample.name}</Text>
				{sampleUrl && <Player url={sampleUrl} onPlaying={setIsPlaying} />}
				<Text>{data.sample.transcription}</Text>
			</View>
		</View>
	);
};

export default Sample;
