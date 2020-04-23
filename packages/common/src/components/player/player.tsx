import React from 'react';
import { Button } from 'react-native';
import Video from 'react-native-video';

const Player = ({ url }) => {
	const [paused, setPaused] = React.useState(true);

	return (
		<React.Fragment>
			<Video
				source={{ uri: url }}
				paused={paused}
				onEnd={() => {
					setPaused(true);
				}}
			/>
			{paused ? (
				<Button title="Play" onPress={() => setPaused(false)} />
			) : (
				<Button title="Pause" onPress={() => setPaused(true)} />
			)}
		</React.Fragment>
	);
};

export default Player;
