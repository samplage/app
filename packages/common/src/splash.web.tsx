import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import Logo from './components/logo';

const App = () => {
	const opacity = useRef(new Animated.Value(1));
	const translateY = useRef(new Animated.Value(0));

	useEffect(() => {
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
		}).start();
	}, []);

	return (
		<Animated.View
			style={[StyleSheet.absoluteFill, styles.bootsplash, { opacity: opacity.current }]}
		>
			<Animated.View style={[styles.logo, { transform: [{ translateY: translateY.current }] }]}>
				<Logo />
			</Animated.View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	bootsplash: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
	},
	logo: {
		height: 70,
		width: 70,
	},
});

export default App;
