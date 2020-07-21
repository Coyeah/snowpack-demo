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
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-webpack'],
  devOptions: {
    bundle: false,
  },
  buildOptions: {
    baseUrl: '/',
  },
};
