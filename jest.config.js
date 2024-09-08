module.exports = {
    testTimeout: 30000, // 30 seconds,
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'json'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
      },
  };