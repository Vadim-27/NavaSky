import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#161616',
                    dark: '#262626',
                },
                blue: {
                    100: '#84c0ef',
                },
                violet: {
                    100: '#b5cafc',
                },
                gray: {
                    100: '#eeeeee',
                    200: '#c8c8c8',
                    300: 'a8a8a8',
                },
            },
            fontFamily: {
                gilroy: '"Gilroy", sans-serif',
                nunito: '"Nunito Sans", sans-serif',
                gotham: '"Gotham Book", sans-serif',
            },
            screens: {
                desktop: '1600px',
            },
        },
    },
    plugins: [],
};
export default config;
