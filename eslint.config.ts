import js from "@eslint/js";
import type { Linter } from "eslint";

const config: Linter.Config = {
  ...js.configs.recommended,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
  },
  overrides: [
    {
      files: ["__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
};

export default config;