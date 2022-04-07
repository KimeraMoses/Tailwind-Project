// config-overrides.js
const { alias, configPaths } = require("react-app-rewire-alias");

const aliasMap = configPaths("./tsconfig.json");

module.exports = alias(aliasMap);
