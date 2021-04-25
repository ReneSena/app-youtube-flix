module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'eslint-config-prettier',
		'prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'eslint-plugin-prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.js', '.jsx'] },
		],
		'import/prefer-default-export': 'off',
		'react/no-danger': 'off',
	},
};
