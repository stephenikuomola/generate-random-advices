import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsdoc from 'eslint-plugin-jsdoc';
import perfectionist from 'eslint-plugin-perfectionist';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  jsdoc.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
  {
    ignores: ['node_modules/**', '**/dist', '.parcel-cache/**']
  },
  {
    files: ['**/*.js'],
    plugins: {
      jsdoc
    },
  }
];