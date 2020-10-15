module.exports = {
  extends: ["airbnb", "plugin:jest/recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "prettier/prettier": "error",
  },
  env: {
    browser: true,
  },
};
