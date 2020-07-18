module.exports = {
	root: true,
	env: {
		'react-native/react-native': true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
	],
	plugins: ['@typescript-eslint', 'react-native', 'react-hooks'],
	rules: {
		'import/extensions': ['error', 'never'],
		'spaced-comment': ['error', 'always', { markers: ['/'] }],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/prefer-interface': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens',
				assignment: 'parens',
				return: 'parens',
				arrow: 'parens',
				condition: 'ignore',
				logical: 'ignore',
				prop: 'ignore',
			},
		],
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/destructuring-assignment': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'prettier/prettier': 'error',
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
