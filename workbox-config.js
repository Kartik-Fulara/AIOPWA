module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,png,svg,js,html,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};