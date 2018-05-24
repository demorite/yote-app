module.exports = {

	apps: [
		{
			name: 'API',
			script: 'app.js',
			env: {
				NODE_ENV: 'developement'
			},
			watch: true,
			"ignore_watch": [
				"node_modules",
				".tmp",
				".idea",
				"views"
			],
		},
	],
};
