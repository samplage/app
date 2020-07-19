import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import BootSplash from 'react-native-bootsplash';
import slugify from '@sindresorhus/slugify';

const query = gql`
	{
		samples {
			id
			name
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
			<Link to={`/sample/${slugify(name)}-${id}`}>{name}</Link>
		</View>
	));
};

export default Home;
