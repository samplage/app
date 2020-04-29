import React from 'react';
import { Button } from 'react-native';
import { Howl, Howler } from 'howler';

interface Props {
	url: string;
	onPlaying?: () => void;
}

const Player = ({ url, onPlaying }: Props) => {
	const [paused, setPaused] = React.useState(true);
	const sound = new Howl({ src: url, html5: true });
	const soundRef = React.useRef(sound);

	soundRef.current.onend = () => {
		setPaused(true);
		onPlaying(false);
	};

	const play = () => {
		soundRef.current.play();
		setPaused(false);
		onPlaying(true);
	};

	const pause = () => {
		soundRef.current.pause();
		setPaused(true);
		onPlaying(false);
	};

	return (
		<React.Fragment>
			{paused ? <Button title="Play" onPress={play} /> : <Button title="Pause" onPress={pause} />}
		</React.Fragment>
	);
};

export default Player;
