import js from "@eslint/js";
import type { Linter } from "eslint";

const config: Linter.Config = {
  ...js.configs.recommended,
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    globals: {
      jest: true
    },
overrides: [
    {
      "files": ["tests/**/*"],
      "plugins": ["jest"],
      "env": {
        "jest/globals": true
      }
    }
  ]
  },
  rules: {
    "no-console": "off"
  }
}

export default config;