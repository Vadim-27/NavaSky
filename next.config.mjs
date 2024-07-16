// import { i18n } from './next-i18next.config';
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     i18n,
// };

// export default nextConfig;

import nextI18NextConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // i18n: nextI18NextConfig.i18n,
    i18n: {
        locales: ['en-US', 'uk'],

        defaultLocale: 'en-US',
    },
};
// console.log('i18n', nextI18NextConfig.i18n);

export default nextConfig;

/////////////////////////////
// const config = require('./next-i18next.config.js');

// /** @type {import('next').NextConfig} */
// ////////////////////////
// // const nextConfig = {
// //     i18n: nextI18NextConfig.i18n,
// // };

// // export default nextConfig;

// const nextConfig = {
//     i18n: config.i18n,
// };

// // export default nextConfig;
// module.exports = nextConfig;
/////////////////
// @ts-check
// const { i18n } = require('./next-i18next.config.js');

// // You can remove the following 2 lines when integrating our example.
// // const { loadCustomBuildParams } = require('./next-utils.config');
// // const { esmExternals = false, tsconfigPath } = loadCustomBuildParams();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // experimental: {
//     //     esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
//     // },
//     i18n,
//     reactStrictMode: true,
//     // typescript: {
//     //     tsconfigPath,
//     // },
// };

// module.exports = nextConfig;
