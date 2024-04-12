/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: [
    'package*.json',
    '.gitignore',
    '.simple-git-hooks.json',
    'README.md',
    'index.html'
  ],
  overrides: [
    {
      files: ['.vue', '.js', '.jsx', '.cjs', '.mjs']
    }
  ]
}
