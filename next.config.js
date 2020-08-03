const withCSS = require('@zeit/next-css');
const withSCSS = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCSS,withSCSS]);

