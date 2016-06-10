module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": [
  "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "accessor-pairs": [
      2,
      {
        "getWithoutSet": true,
        "setWithoutGet": true
      }
    ],
    "array-callback-return": 2,
    "curly": [
      2,
      "multi-line"
    ],
    "default-case": 2,
    "eqeqeq": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-else-return": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-multi-spaces": 2,
    "no-native-reassign": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-useless-call": 2,
    "yoda": 2,
    "array-bracket-spacing": [
      2,
      "always"
    ],
    "block-spacing": [
      2,
      "always"
    ],
    "brace-style": [
      2,
      "1tbs",
    {
      "allowSingleLine": true
    }
    ],
    "camelcase": 2,
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": [
      2,
      "never"
    ],
    "eol-last": 2,
    "func-names": 2,
    "func-style": [
      2,
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "key-spacing": 2,
    "keyword-spacing": 2,
    "linebreak-style": [
      2,
      "unix"
    ],
    "lines-around-comment": [
      2,
      {
        "allowBlockStart": true,
        "allowBlockEnd": false
      }
    ],
    "max-depth": [
      2,
      {
        "max": 4
      }
    ],
    "max-len": [
      2,
      {
        "code": Infinity,
        "comments": 80,
        "tabWidth": 2
      }
    ],
    "max-nested-callbacks": 2,
    "max-params": 2,
    "max-statements-per-line": 2,
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 2,
    "newline-before-return": 2,
    "newline-per-chained-call": [
      2,
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "no-array-constructor": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2
      }
    ],
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [
      2,
      "always"
    ],
    "object-property-newline": 2,
    "one-var-declaration-per-line": 2,
    "operator-assignment": [
      2,
      "always"
    ],
    "operator-linebreak": [
      2,
      "none"
    ],
    "padded-blocks": [
      2,
      "never"
    ],
    "quote-props": [
      2,
      "as-needed"
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "semi": [
      2,
      "always"
    ],
    "no-console": 2,
    "semi-spacing": [
      2,
      {
        "before": false
      }
    ],
    "space-before-blocks": 2,
    "space-in-parens": [
      2,
      "never"
    ],
    "wrap-regex": 2,
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "arrow-parens": [
      2,
      "as-needed"
    ],
    "arrow-spacing": 2,
    "constructor-super": 2,
    "generator-star-spacing": [
      2,
      "before"
    ],
    "no-class-assign": 2,
    "no-confusing-arrow": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 2,
    "no-new-symbol": 2,
    "no-this-before-super": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": [
      2,
      {
        "ignoreImport": true,
      }
    ],
    "no-var": 2,
    "object-shorthand": [
      2,
      "always"
    ],
    "prefer-arrow-callback": 1,
    "prefer-const": 2,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "yield-star-spacing": [
      2,
      {
        "before": true,
        "after": false
      }
    ]
  }
};
