module.exports = {
  extends: "../../.eslintrc.js",
  parserOptions: {
    project: "./tsconfig.json"
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
