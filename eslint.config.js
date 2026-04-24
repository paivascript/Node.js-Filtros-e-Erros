import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node, // Isso resolve o erro do 'process' que ela menciona
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "linebreak-style": ["error", "unix"] // Use "windows" se estiver no Windows
    },
  },
];