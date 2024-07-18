export const fallbackLng = 'en';
export const languages = [fallbackLng, 'uk']; // 'fr', 'es'
export const defaultNS = 'common';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        debug: process.env.DEBUG_MODE === 'true',
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}
