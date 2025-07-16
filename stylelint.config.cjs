module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'color-hex-length': 'short',
    'color-named': 'never',
    'selector-id-pattern': null,
    "selector-class-pattern": null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],

    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/coverage/**/*.css'],
};
