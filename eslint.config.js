import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      // Code quality
      'no-console': 'error',
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      // Best practices
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-with': 'error',

      // Style
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],

      // Modern JavaScript
      'prefer-const': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'warn',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', '.vscode/**', 'docs/**'],
  },
];
