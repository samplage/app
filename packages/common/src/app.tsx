import 'react-native-gesture-handler';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';

const client = new ApolloClient({
	uri: 'https://us-central1-samplage-d938b.cloudfunctions.net/api/',
});

const Stack = createStackNavigator();

const App = () => {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</ApolloProvider>
	);
};

export default App;
