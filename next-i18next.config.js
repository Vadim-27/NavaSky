// // next.config.mjs
// // import path from 'path';
//  const path = require('path');

// /**
//  * @type {import('next-i18next').UserConfig}
//  */
// const config = {
//     // https://www.i18next.com/overview/configuration-options#logging
//     debug: process.env.NODE_ENV === 'development',
//     i18n: {
//         defaultLocale: 'uk',
//         locales: ['en', 'uk'],
//     },
//     /** To avoid issues when deploying to some paas (vercel...) */
//     localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales',

//     reloadOnPrerender: process.env.NODE_ENV === 'development',

//     /**
//      * @link https://github.com/i18next/next-i18next#6-advanced-configuration
//      */
//     // saveMissing: false,
//     // strictMode: true,
//     // serializeConfig: false,
//     // react: { useSuspense: false }
// };

// // export default config;
// module.exports = config;

// import path from 'path';
//////////////////////////////////////
// const path = require('path');

// /**
//  * @type {import('next-i18next').UserConfig}
//  */
// const config = {
//     debug: process.env.NODE_ENV === 'development',
//     i18n: {
//         defaultLocale: 'en',
//         locales: ['en', 'de'],
//     },
//     localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales',
//     reloadOnPrerender: process.env.NODE_ENV === 'development',
// };

// module.exports = config;
/////////////////////////////////////////
// @ts-check

// /**
//  * @type {import('next-i18next').UserConfig}
//  */
// module.exports = {
//     // https://www.i18next.com/overview/configuration-options#logging
//     debug: process.env.NODE_ENV === 'development',
//     i18n: {
//         defaultLocale: 'en',
//         locales: ['en', 'de'],
//     },
//     /** To avoid issues when deploying to some paas (vercel...) */
//     localePath:
//         typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',

//     reloadOnPrerender: process.env.NODE_ENV === 'development',

//     /**
//      * @link https://github.com/i18next/next-i18next#6-advanced-configuration
//      */
//     // saveMissing: false,
//     // strictMode: true,
//     // serializeConfig: false,
//     // react: { useSuspense: false }
// };
//////////////////////////////
// next-i18next.config.js
// const path = require('path');

// module.exports = {
//     debug: process.env.NODE_ENV === 'development',
//     i18n: {
//         defaultLocale: 'uk',
//         locales: ['en', 'uk'],
//     },
//     localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales',
//     reloadOnPrerender: process.env.NODE_ENV === 'development',
// };
