/* eslint-disable @typescript-eslint/no-var-requires */

const nextPWA = require('next-pwa');

const production = process.env.NODE_ENV === 'production';

module.exports = nextPWA({
  target: 'serverless',

  pwa: {
    dest: 'public',

    disable: !production,
  },
});
