import React, { useState, Fragment } from 'react';
import { View, Button, Text } from 'react-native';
import Cats from './cats';
import AuthService from './services/auth';

const auth = new AuthService();

const App = () => {
	const [user, setUser] = useState(null);

	const handleLogin = async () => {
		const user = await auth.login();
		console.log(user);
		setUser(user);
	};

	const handleLogout = async () => {
		setUser(null);
	};

	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				flex: 1,
			}}
		>
			{user ? (
				<Fragment>
					<Cats />
					<Button title="Logout" onPress={handleLogout} />
				</Fragment>
			) : (
				<Fragment>
					<Text style={{ marginBottom: 20 }}>Login to see cats</Text>
					<Button title="Login" onPress={handleLogin} />
				</Fragment>
			)}
		</View>
	);
};

export default App;
