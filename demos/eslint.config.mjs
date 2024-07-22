import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021, // ECMAScript 2021
      sourceType: "script", // CommonJS
      globals: globals.node
    },
    rules: {
      "no-var": "error", // Disallow var, use let or const instead
      "prefer-const": "error", // Suggest using const if a variable is never reassigned
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], // Ignore unused variables starting with _
      "eqeqeq": "error", // Require the use of === and !==
      "curly": "error", // Enforce consistent brace style for all control statements
      "no-console": "off", // Allow the use of console
      "quotes": ["error", "single"], // Enforce the use of single quotes
      "comma-spacing": ["error", { "before": false, "after": true }], // Enforce consistent spacing after commas
      "space-in-parens": ["error", "never"], // Disallow spaces inside parentheses
    }
  }
];
