module.exports = {
	root: true,
	env: {
		'react-native/react-native': true,
		// 'jest/globals': true,
	},
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react-native', 'react-hooks', 'prettier'],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'import/extensions': ['error', 'never'],
		// 'spaced-comment': ['error', 'always', { markers: ['/'] }],
		// 'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		// 'no-underscore-dangle': ['error', { allowAfterThis: true }],
		// 'react/prop-types': 'off',
		// 'react/destructuring-assignment': 'off',
		// 'react/jsx-props-no-spreading': 'off',
		// 'react/static-property-placement': 'off',
		// 'react/jsx-wrap-multilines': [
		// 	'error',
		// 	{
		// 		declaration: 'parens',
		// 		assignment: 'parens',
		// 		return: 'parens',
		// 		arrow: 'parens',
		// 		condition: 'ignore',
		// 		logical: 'ignore',
		// 		prop: 'ignore',
		// 	},
		// ],
		// 'react-hooks/rules-of-hooks': 'warn',
		// 'react-hooks/exhaustive-deps': 'warn',
		// 'prettier/prettier': 'error',
		// camelcase: 'off',
	},
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
		},
	},
};
