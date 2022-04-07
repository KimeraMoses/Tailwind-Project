module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "consistent-return": 2,
    indent: [1, 4],
    "no-else-return": 1,
    semi: [1, "always"],
    "space-unary-ops": 2,
    "no-mixed-spaces-and-tabs": 0,
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-empty-function": 0,
  },
};
