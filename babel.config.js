module.exports = {
  extends: '@snowpack/app-scripts-react/babel.config.json',
  presets: [],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ],
};
