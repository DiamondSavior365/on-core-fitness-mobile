const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Enable SVG transformer
  config.transformer.babelTransformerPath = require.resolve(
    "react-native-svg-transformer"
  );

  // Tell Metro not to treat SVGs as assets
  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== "svg"
  );

  // Tell Metro to treat SVGs as source files
  config.resolver.sourceExts.push("svg");

  return config;
})();

// ------------------------ OLD CONFIG FILE ---------------------------

// // Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname);

// module.exports = config;
