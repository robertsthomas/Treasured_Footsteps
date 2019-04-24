const withCSS = require('@zeit/next-css')


const nextConfig = {
  distDir: 'build',
};
module.exports = withCSS([], nextConfig)