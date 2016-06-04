module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
  "rules": {
    "accessor-pairs": [
      "error",
      {
        "getWithoutSet": true,
        "setWithoutGet": true
      }
    ],
    "array-callback-return": "error",
    "curly": [
      "error",
      "multi-line"
    ],
    "default-case": "error",
    "eqeqeq": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-lone-blocks": "error",
    "no-magic-numbers": "error",
    "no-multi-spaces": "error",
    "no-native-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-useless-call": "error",
    "yoda": "error",
    "array-bracket-spacing": [
      "error",
      "always"
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "camelcase": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": ["error", "never"],
    "eol-last": "error",
    "func-names": "error",
    "func-style": [
      "error",
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": [
      "error",
      {
        "allowBlockStart": true,
        "allowBlockEnd": false
      }
    ],
    "max-depth": [
      "error",
      {
        "max": 4
      }
    ],
    "max-len": [
      "error",
      {
        "comments": 80
      }
    ],
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements-per-line": "error",
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": "error",
    "newline-before-return": "error",
    "newline-per-chained-call": [
      "error",
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "no-array-constructor": "error",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2
      }
    ],
    "no-new-object": "error",
    "no-spaced-func": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-property-newline": "error",
    "one-var-declaration-per-line": "error",
    "operator-assignment": [
      "error",
      "always"
    ],
    "operator-linebreak": [
      "error",
      "none"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "quote-props": [
      "error",
      "as-needed"
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "require-jsdoc": "error",
    "semi": [
      "error",
      "always"
    ],
    "no-console": "error",
    "semi-spacing": [
      "error",
      {
        "before": false
      }
    ],
    "space-before-blocks": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "wrap-regex": "error",
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "arrow-spacing": "error",
    "constructor-super": "error",
    "generator-star-spacing": [
      "error",
      "before"
    ],
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always"
    ],
    "prefer-arrow-callback": "warn",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "sort-imports": "warn",
    "yield-star-spacing": [
      "error",
      {
        "before": true,
        "after": false
      }
    ]
  }
};
