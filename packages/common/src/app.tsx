import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import BootSplash from 'react-native-bootsplash';

const bootSplashLogo = require('../assets/bootsplash_logo.png');

const fakeApiCallWithoutBadNetwork = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const App = () => {
	const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
	const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
	const opacity = useRef(new Animated.Value(1));
	const translateY = useRef(new Animated.Value(0));

	const init = async () => {
		console.log('hide');
		BootSplash.hide();

		// You can uncomment this line to add a delay on app startup
		const data = await fakeApiCallWithoutBadNetwork(3000);

		const useNativeDriver = true;

		Animated.stagger(250, [
			Animated.spring(translateY.current, { useNativeDriver, toValue: -50 }),
			Animated.spring(translateY.current, {
				useNativeDriver,
				toValue: Dimensions.get('window').height,
			}),
		]).start();

		Animated.timing(opacity.current, {
			useNativeDriver,
			toValue: 0,
			duration: 150,
			delay: 350,
		}).start(() => {
			setBootSplashIsVisible(false);
		});
	};

	useEffect(() => {
		bootSplashLogoIsLoaded && init();
	}, [bootSplashLogoIsLoaded]);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello, Dave.</Text>

			{bootSplashIsVisible && (
				<Animated.View
					style={[StyleSheet.absoluteFill, styles.bootsplash, { opacity: opacity.current }]}
				>
					<Animated.Image
						source={bootSplashLogo}
						fadeDuration={0}
						onLoadEnd={() => {
							console.log('go');

							setBootSplashLogoIsLoaded(true);
						}}
						style={[styles.logo, { transform: [{ translateY: translateY.current }] }]}
					/>
				</Animated.View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	text: {
		fontSize: 24,
		fontWeight: '700',
		margin: 20,
		lineHeight: 30,
		color: '#333',
		textAlign: 'center',
	},
	bootsplash: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	logo: {
		height: 100,
		width: 100,
	},
});

export default App;
