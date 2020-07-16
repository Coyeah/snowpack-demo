module.exports = {
  extends: '@snowpack/app-scripts-react',
  scripts: {
    'mount:public': 'mount public --to /',
    'mount:src': 'mount src --to /_dist_',
    'run:lint': "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    'run:lint::watch': 'watch "$1" src',
    'bundle:*': '@snowpack/plugin-react-refresh',
    'bundle:*': '@snowpack/plugin-webpack',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    // '@snowpack/plugin-babel',
    [
      '@snowpack/plugin-webpack',
      {
        // sourceMap: true,
        // extendConfig: config => config
      },
    ],
  ],
  installOptions: {
    sourceMap: true,
  },
  devOptions: {
    port: 9000,
    out: 'build',
    // bundle:false,
    // fallback: "./build/index.html",
  },
  buildOptions: {},
  proxy: {},
};
