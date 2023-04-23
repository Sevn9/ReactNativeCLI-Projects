module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      parserOpts: {
        plugins: ['jsx'],
      },
      // your babel options
      //presets: ['@babel/preset-env'],
    },
  },
};
