module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:jsdoc/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'jsdoc',
    'react',
  ],
  rules: {
    'max-len': ['error', { code: 120 }],
    'react/prop-types': [0],
    'require-jsdoc': ['error'],
  },
};
