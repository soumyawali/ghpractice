module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017
  },
  "rules": {
    "arrow-parens": 2,
    "arrow-spacing": 2,
    "comma-dangle": 2,
    "constructor-super": 2,
    "curly": 2,
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": 2,
    "eqeqeq": 2,
    "generator-star-spacing": 2,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-class-assign": 2,
    "no-confusing-arrow": 2,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-debugger": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 2,
    "no-else-return": 2,
    "no-empty": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-global-assign" : 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-new": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-trailing-spaces": 2,
    "no-shadow": [
      1,
      {
        "hoist": "functions"
      }
    ],
    "no-sparse-arrays": 2,
    "no-throw-literal": 2,
    "no-undef": [
      "error",
      {
        "typeof": true
      }
    ],
    "no-undef-init": [
      "error"
    ],
    "no-unreachable": 2,
    "no-unsafe-negation": 2,
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "none", // TODO - change to "after-used"
        "ignoreRestSiblings": false
      }
    ],
    "no-useless-return": 2,
    "no-var": 2,
    "no-with": 2,
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": "always",
        "ObjectPattern": {
          "multiline": true
        }
      }
    ],
    "prefer-const": 2,
    "semi": [
      "error",
      "always"
    ],
    "use-isnan": 2
  }
};