module.exports = {
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'jsdom'
};