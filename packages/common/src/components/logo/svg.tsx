import * as React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Logo = () => {
	const animatedValue = new Animated.Value(0);

	// React.useEffect(() => {
	// 	Animated.loop(
	// 		Animated.timing(animatedValue, {
	// 			toValue: 1,
	// 			duration: 10,
	// 			easing: Easing.ease,
	// 			useNativeDriver: true,
	// 		})
	// 	).start();
	// });

	// const translateX = animatedValue.interpolate({
	// 	inputRange: [0, 1],
	// 	outputRange: [-350, 350],
	// });

	const rotation = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [0, (360 * 10) / 10 / 1000],
	});

	return (
		<Svg viewBox="0 0 50 38.05" fill="black" width="70" height="70">
			<Path
				id="Line_1"
				data-name="Line 1"
				d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"
			/>
			<AnimatedPath
				id="Line_2"
				data-name="Line 2"
				d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"
				rotation={rotation}
			/>
			<Path
				id="Line_3"
				data-name="Line 3"
				d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"
				// rotation="5"
			/>
			<Path
				id="Line_4"
				data-name="Line 4"
				d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"
				// transform={{ scaleY: '2', originX: '50%', originY: '50%' }}
			/>
			<Path
				id="Line_5"
				data-name="Line 5"
				d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"
			/>
			<Path
				id="Line_6"
				data-name="Line 6"
				d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"
			/>
			<Path
				id="Line_7"
				data-name="Line 7"
				d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"
			/>
			<Path
				id="Line_8"
				data-name="Line 8"
				d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"
			/>
			<Path
				id="Line_9"
				data-name="Line 9"
				d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"
			/>
		</Svg>
	);
};

export default Logo;
