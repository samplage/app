import { AppRegistry } from 'react-native-web';
import App from '@samplage/common/src/app';

import './index.css';

// register the app
AppRegistry.registerComponent('samplage', () => App);

AppRegistry.runApplication('samplage', {
	rootTag: document.getElementById('root'),
});
