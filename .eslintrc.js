module.exports = {
	"extends": [
    "airbnb-base",
	],
	"plugins": [
	],
  "rules": {
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
      'import/no-dynamic-require',
    ],
    'no-await-in-loop': 'warn',
  }
}