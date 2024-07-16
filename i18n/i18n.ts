// import i18next from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import resourcesToBackend from 'i18next-resources-to-backend';
// import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

// i18next
//     .use(I18nextBrowserLanguageDetector)
//     .use(
//         resourcesToBackend(
//             (language, namespace) => import(`./locales/${language}/${namespace}.json`)
//         )
//     )
//     .use(initReactI18next)
//     .init({
//         debug: process.env.DEBUG_MODE === 'true',
//         ns: 'common',
//         fallbackLng: 'en',
//     });

// export default i18next;

// import NextIntlPlugin from 'next-intl/plugin';

// export default NextIntlPlugin({
//     locales: ['en', 'ua'],
//     defaultLocale: 'en',
//     messages: {
//         en: () => import('./locales/en/common.json'),
//         ua: () => import('./locales/ua/common.json'),
//     },
// });

'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation as useTranslationOrg } from 'next-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName } from './settings';

const runsOnServerSide = typeof window === 'undefined';

//
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend(
            (language, namespace) => import(`./locales/${language}/${namespace}.json`)
        )
    )
    .init({
        ...getOptions(),
        useSuspense: true,
        lng: undefined, // let detect the language on client side
        detection: {
            order: ['htmlTag', 'cookie', 'navigator'],
        },
        preload: runsOnServerSide ? languages : [],
    });

export function useTranslation(...args) {
    const [cookies, setCookie] = useCookies([cookieName]);
    const cookiesLng = cookies.i18next;

    const ret = useTranslationOrg(...args);

    const { i18n } = ret;

    if (runsOnServerSide && cookiesLng && i18n.resolvedLanguage !== cookiesLng) {
        i18n.changeLanguage(cookiesLng);
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (activeLng === i18n.resolvedLanguage) {
                return;
            }
            setActiveLng(i18n.resolvedLanguage);
        }, [activeLng, i18n.resolvedLanguage]);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!cookiesLng || i18n.resolvedLanguage === cookiesLng) {
                return;
            }
            i18n.changeLanguage(cookiesLng);
        }, [cookiesLng, i18n]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (cookies.i18next === cookiesLng) {
                return;
            }
            setCookie(cookieName, cookiesLng, { path: '/' });
        }, [cookiesLng, cookies.i18next]);
    }
    return ret;
}

export default i18next;
