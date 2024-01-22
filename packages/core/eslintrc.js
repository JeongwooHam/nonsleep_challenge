module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "unused-imports",
    "simple-import-sort",
    "react",
    "react-hooks",
    "prettier",
  ],
  rules: {
    semi: "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
