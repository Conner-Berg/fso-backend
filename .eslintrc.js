module.exports = {
	env: {
		node: true,
		commonjs: true,
		es2021: true,
		jest: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
	},
	plugins: ["react"],
	settings: {
		react: {
			version: "^18.2.0",
		},
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		eqeqeq: "error",
		"no-trailing-spaces": "error",
		"object-curly-spacing": ["error", "always"],
		"arrow-spacing": ["error", { before: true, after: true }],
		"no-console": 0,
	},
};
