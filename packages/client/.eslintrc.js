module.exports = {
  extends: ["../../.eslintrc.js", "airbnb/hooks", "prettier/react"],
  parserOptions: {
    project: "./tsconfig.json"
  },
  overrides: [
    {
      files: ["src/*.test.{ts,tsx}"],
      env: { jest: true },
      extends: ["plugin:jest/recommended", "plugin:testing-library/recommended"]
    },
    {
      files: "src/*.generated.tsx",
      rules: {
        "import/no-duplicates": "off"
      }
    }
  ],
  rules: {
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-shadow": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "src/**/*.test.{ts,tsx}",
          "src/**/*.stories.tsx",
          "src/**/stories.tsx",
          "src/testUtils/**/*.ts"
        ]
      }
    ]
  }
};
