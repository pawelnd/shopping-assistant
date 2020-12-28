module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint", "autofix"],
  extends: [
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  "rules": {
    "autofix/no-debugger": "error",
    'no-underscore-dangle': ["error", { "allow": ["_id"] }],
    "no-param-reassign": ["error", { "props": false }],
    "import/prefer-default-export": "off"
  },
  overrides: [
    {
      rules: {
        'import/prefer-default-export' : 0,
        'no-underscore-dangle': ["error", { "allow": ["_id"] }]
      },
      files: ["*.test.controller.ts"],
      env: { jest: true },
      extends: ["plugin:jest/recommended"]
    }
  ]
};
