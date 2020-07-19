import 'react-native-gesture-handler';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Sample from './pages/sample';

const client = new ApolloClient({
	uri:
		process.env.NODE_ENV === 'production'
			? 'https://us-central1-samplage-d938b.cloudfunctions.net/api/'
			: 'http://localhost:5001/samplage-d938b/us-central1/api',
});

const Stack = createStackNavigator();

const linking = {
	prefixes: ['samplage://'],
	config: {
		screens: {
			Home: '',
			Sample: {
				path: 'sample/:id?',
				// parse: {
				// 	id: (id) => id.split('-').pop(),
				// },
			},
		},
	},
};

const App = (): React.ReactElement => {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer linking={linking}>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Sample" component={Sample} />
				</Stack.Navigator>
			</NavigationContainer>
		</ApolloProvider>
	);
};

export default App;
