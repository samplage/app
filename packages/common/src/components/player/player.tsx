import React from 'react';
import { Button } from 'react-native';
import Video from 'react-native-video';

interface Props {
	url: string;
	onPlaying: (arg0: boolean) => void;
}

const Player = ({ url, onPlaying }: Props): React.ReactElement => {
	const [paused, setPaused] = React.useState(true);

	const handlePlay = () => {
		setPaused(false);
		onPlaying(true);
	};

	const handlePause = () => {
		setPaused(true);
		onPlaying(false);
	};

	return (
		<React.Fragment>
			<Video source={{ uri: url }} paused={paused} onEnd={handlePause} />
			{paused ? (
				<Button title="Play" onPress={handlePlay} />
			) : (
				<Button title="Pause" onPress={handlePause} />
			)}
		</React.Fragment>
	);
};

export default Player;
