const { override, babelInclude, addBabelPlugins } = require('customize-cra');
const path = require('path');

module.exports = override(
	...addBabelPlugins(
		// 'babel-plugin-react-native-web',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator'
		// '@babel/plugin-proposal-export-default-from'
	),
	babelInclude([
		// tell Babel to include common files
		path.resolve('src'),
		path.resolve('../common/src'),
		// path.resolve('../../node_modules/react-native-video'),
	])
);
