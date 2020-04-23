import React from 'react';
import { Button } from 'react-native';
import { Howl, Howler } from 'howler';

const Player = ({ url }) => {
	const [paused, setPaused] = React.useState(true);
	const sound = new Howl({ src: url, html5: true });
	const soundRef = React.useRef(sound);

	soundRef.current.onend = () => {
		setPaused(true);
	};

	const play = () => {
		soundRef.current.play();
		setPaused(false);
	};

	const pause = () => {
		soundRef.current.pause();
		setPaused(true);
	};

	return (
		<React.Fragment>
			{paused ? <Button title="Play" onPress={play} /> : <Button title="Pause" onPress={pause} />}
		</React.Fragment>
	);
};

export default Player;
