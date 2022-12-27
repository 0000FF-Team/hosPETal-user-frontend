module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	plugins: ['@typescript-eslint', 'prettier'],
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		project: './tsconfig.json',
	},
	ignorePatterns: ['.eslintrc.js'],
	env: {
		browser: true,
	},
};
