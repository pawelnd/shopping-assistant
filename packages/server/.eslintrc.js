module.exports = {
  extends: "../../.eslintrc.js",
  parserOptions: {
    project: "./tsconfig.json"
  },
  overrides: [
    {
      rules: {
        'import/prefer-default-export' : 0
      },
      files: ["*.test.controller.ts"],
      env: { jest: true },
      extends: ["plugin:jest/recommended"]
    }
  ]
};
