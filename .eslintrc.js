module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  parserOptions: {
    ecmaVersion: 2018
  },
  env: {
    browser: true,
    jest: true
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "import"],
  rules: {
    "linebreak-style": 0,
    "max-len": ["error", 120],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
