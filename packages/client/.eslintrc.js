module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'autofix'],
  extends: ['airbnb-typescript', 'plugin:import/typescript', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint', 'airbnb/hooks', 'prettier/react'],
  rules: {
    'autofix/no-debugger': 'error',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'import/no-duplicates': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/**/*.test.{ts,tsx}', 'src/**/*.stories.tsx', 'src/**/stories.tsx', 'src/testUtils/**/*.ts']
      }
    ]
  }
};
