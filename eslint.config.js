import css from '@eslint/css';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import packageJson from 'eslint-plugin-package-json/configs/recommended';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  packageJson,
  jsdoc.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
  ...eslintPluginJsonc.configs['flat/recommended-with-json'],
  {
    ignores: ['node_modules/**', '**/dist', '.parcel-cache/**']
  },
  {
    files: ['*.json', '*.json5'],
    languageOptions: {
      parser: jsoncParser
    }
  },
  {
    files: ['**/*.css'],
    language: 'css/css',
    languageOptions: {
      customSyntax: {
        atrules: {
          'custom-media': {
            prelude: '<media-query-list>'
          }
        }
      }
    },
    plugins: {
      css
    },
    rules: {
      'css/no-duplicate-imports': ['error'],
      'css/no-empty-blocks': ['error'],
      'css/no-invalid-properties': ['error']
    }
  },
  {
    files: ['**/*.js', '**/*.css'],
    plugins: {
      jsdoc
    },
    rules: {
      'constructor-super': ['error'],
      'default-case': ['error'],
      'default-case-last': ['error'],
      'jsdoc/check-access': ['warn'],
      'jsdoc/check-alignment': ['warn'],
      'jsdoc/check-param-names': ['warn'], // Recommended
      'jsdoc/check-property-names': ['warn'], // Recommended
      'jsdoc/check-tag-names': ['warn'], // Recommended
      'jsdoc/check-types': ['warn'], // Recommended
      'jsdoc/check-values': ['error'],
      'jsdoc/empty-tags': ['warn'], // Recommended
      'jsdoc/implements-on-classes': ['warn'], // Recommended
      'jsdoc/multiline-blocks': ['warn'], // Recommended
      'jsdoc/no-multi-asterisks': ['warn'], // Recommended
      'jsdoc/no-undefined-types': ['warn'], // Recommended
      'jsdoc/require-asterisk-prefix': ['warn'],
      'jsdoc/require-description': ['warn'],
      'jsdoc/require-jsdoc': ['error'], // Recommended
      'jsdoc/require-param': ['error'], // Recommended
      'jsdoc/require-param-description': ['warn'], // Recommended
      'jsdoc/require-param-name': ['warn'], // Recommended
      'jsdoc/require-param-type': ['warn'], // Recommended
      'jsdoc/require-property': ['warn'], // Recommended
      'jsdoc/require-property-description': ['warn'], // Recommended
      'jsdoc/require-property-name': ['warn'], // Recommended
      'jsdoc/require-property-type': ['warn'], // Recommended
      'jsdoc/require-returns': ['warn'], // Recommended
      'jsdoc/require-returns-check': ['warn'], // Recommended
      'jsdoc/require-returns-description': ['warn'], // Recommended
      'jsdoc/require-returns-type': ['warn'], // Recommended
      'jsdoc/require-yields': ['warn'], // Recommended
      'jsdoc/require-yields-check': ['warn'], // Recommended
      'jsdoc/tag-lines': ['warn'], // Recommended
      'jsdoc/valid-types': ['warn'], // Recommend
      'no-const-assign': ['error'],
      'no-dupe-args': ['error'],
      'no-dupe-class-members': ['error'],
      'no-dupe-keys': ['error'],
      'no-ex-assign': ['error'],
      'no-magic-numbers': ['error'],
      'no-self-compare': ['error'],
      'no-sparse-arrays': ['error'],
      'no-this-before-super': ['error'],
      'no-unreachable': ['error'],
      'no-useless-assignment': ['error'],
      'no-var': ['error'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: ['error']
    }
  }
];
