import React from 'react';
import { Text, View, Platform } from 'react-native';
import { Link } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import BootSplash from 'react-native-bootsplash';

const query = gql`
	{
		samples {
			id
			name
			transcription
			file
		}
	}
`;

const Home = (): React.ReactElement => {
	const { loading, error, data } = useQuery(query);

	React.useEffect(() => {
		Platform.OS !== 'web' && BootSplash.hide();
	}, []);

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error :(</Text>;

	return data.samples.map(({ id, name }) => (
		<View key={id}>
			<Link to="/Sample/">{name}</Link>
		</View>
	));
};

export default Home;
