import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const query = gql`
	{
		samples {
			name
			transcription
			file
		}
	}
`;

const List = () => {
	const { loading, error, data } = useQuery(query);

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error :(</Text>;

	return data.samples.map(({ name }) => (
		<View>
			<Text>{name}</Text>
		</View>
	));
};

export default List;
