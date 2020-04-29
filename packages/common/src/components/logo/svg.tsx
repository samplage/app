import * as React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const AnimatedLine = Animated.createAnimatedComponent(Line);

interface Props {
	animate?: boolean;
}

const Logo = ({ animate }) => {
	const scaleY = React.useRef(new Animated.Value(1));

	const pulse = () => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(scaleY.current, { toValue: 0.7, useNativeDriver: true }),
				Animated.timing(scaleY.current, { toValue: 1, useNativeDriver: true }),
			])
		).start();
	};

	React.useEffect(() => {
		if (animate) {
			pulse();
		} else {
			scaleY.current.stopAnimation();
		}
	}, [animate]);

	return (
		<Svg viewBox="0 0 18 18" width="70" height="70" stroke="#000">
			<AnimatedLine
				x1="1"
				x2="1"
				y1="8"
				y2="10"
				strokeWidth="6%"
				strokeLinecap="round"
				style={{ transform: [{ scaleY: scaleY.current }], transformOrigin: '50% 50% 0' }}
			/>
			<AnimatedLine
				x1="3"
				x2="3"
				y1="6"
				y2="12"
				strokeWidth="6%"
				strokeLinecap="round"
				style={{ transform: [{ scaleY: scaleY.current }], transformOrigin: '50% 50% 0' }}
			/>
			<AnimatedLine
				x1="5"
				x2="5"
				y1="3"
				y2="15"
				strokeWidth="6%"
				strokeLinecap="round"
				style={{ transform: [{ scaleY: scaleY.current }], transformOrigin: '50% 50% 0' }}
			/>
			<AnimatedLine
				x1="7"
				x2="7"
				y1="6"
				y2="12"
				strokeWidth="6%"
				strokeLinecap="round"
				style={{ transform: [{ scaleY: scaleY.current }], transformOrigin: '50% 50% 0' }}
			/>
			<AnimatedLine
				x1="9"
				x2="9"
				y1="8"
				y2="10"
				strokeWidth="6%"
				strokeLinecap="round"
				style={{ transform: [{ scaleY: scaleY.current }], transformOrigin: '50% 50% 0' }}
			/>
			<AnimatedLine
				x1="11"
				x2="11"
				y1="6"
				y2="12"
				strokeWidth="6%"
				strokeLinecap="round"
				style={{ transform: [{ scaleY: scaleY.current }], transformOrigin: '50% 50% 0' }}
			/>
			<AnimatedLine
				x1="13"
				x2="13"
				y1="3"
				y2="15"
				strokeWidth="6%"
				strokeLinecap="round"
				style={{ transform: [{ scaleY: scaleY.current }], transformOrigin: '50% 50% 0' }}
			/>
			<AnimatedLine
				x1="15"
				x2="15"
				y1="6"
				y2="12"
				strokeWidth="6%"
				strokeLinecap="round"
				style={{ transform: [{ scaleY: scaleY.current }], transformOrigin: '50% 50% 0' }}
			/>
			<AnimatedLine
				x1="17"
				x2="17"
				y1="8"
				y2="10"
				strokeWidth="6%"
				strokeLinecap="round"
				style={{ transform: [{ scaleY: scaleY.current }], transformOrigin: '50% 50% 0' }}
			/>
		</Svg>
	);
};

export default Logo;
