module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native[^/]*|@react-native(-community)?|@react-navigation|react-redux|@reduxjs/toolkit|immer|redux|redux-thunk|reselect)/)',
  ],
  setupFiles: ['./jest.setup.js'],
};
