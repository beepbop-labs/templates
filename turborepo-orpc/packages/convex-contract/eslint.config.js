import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Global parser options to fix tsconfigRootDir ambiguity
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },

  // JS: no type-aware parsing
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: { globals: { ...globals.node } },
  },

  // TS: type-aware parsing for THIS package only
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      globals: { ...globals.node },
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
      },
    },
  },

  { ignores: ["dist/**", "node_modules/**"] },
];
