module.exports = {
  extends: '@snowpack/app-scripts-react',
  scripts: {
    'mount:public': 'mount public --to /',
    'mount:src': 'mount src --to /_dist_',
    'run:lint': "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    // "run:lint::watch": "watch \"$1\" src"
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-babel',
    [
      '@snowpack/plugin-webpack',
      {
        // sourceMap: true,
        // extendConfig: config => config
      },
    ],
  ],
  installOptions: {
    // sourceMap: true
  },
  devOptions: {
    // bundle:false,
    // fallback: "./build/index.html",
  },
  buildOptions: {},
  proxy: {},
};
