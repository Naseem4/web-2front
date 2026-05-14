import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'


import tseslint from 'typescript-eslint'
 origin/lina11
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {

    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,

    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
 origin/lina11
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {

      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },

      ecmaVersion: 2020,
      globals: globals.browser,
 origin/lina11
    },
  },
])
