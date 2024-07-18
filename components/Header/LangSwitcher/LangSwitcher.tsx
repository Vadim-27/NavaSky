'use client';
import { SyntheticEvent, useState, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import scss from './LangSwitcher.module.scss';
import i18next from 'i18next';
import { useCookies } from 'react-cookie';
import { useTranslation } from '@/i18n/i18n';
import { translations } from '@/i18n/i18n.constants';

const LangSwitcher = () => {
    const [alignment, setAlignment] = useState<string>('en');

    const [cookies, setCookie] = useCookies(['i18next']);

    const { i18n } = useTranslation(translations.common); // Отримуємо об'єкт i18n
    const currentLang = i18n.language;

    useEffect(() => {
        const currentLanguage = cookies.i18next || 'en';

        setAlignment(currentLanguage);
        i18next.changeLanguage(currentLanguage);
    }, [cookies]);

    const handleChange = (_: SyntheticEvent, newAlignment: string | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            i18next.changeLanguage(newAlignment).then(() => {
                setCookie('i18next', newAlignment, { path: '/' });
            });
        }
    };
    useEffect(() => {
        if (!currentLang) {
            console.log(i18n);
        }
    }, [i18n, currentLang]);

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleChange}
            className={scss.switcher}
        >
            <ToggleButton
                value="en"
                aria-label="en"
                className={scss.switcherButton}
                sx={{
                    '&.Mui-selected': {
                        backgroundColor: '#b5cafc',
                        color: '#e8f2fe',
                        borderRadius: '15px',
                        outline: '1px solid #b5cafc',
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: '#b5cafc',
                        color: '#e8f2fe',
                        borderRadius: '15px',
                    },
                }}
            >
                Eng
            </ToggleButton>
            <ToggleButton
                value="uk"
                aria-label="uk"
                className={scss.switcherButton}
                sx={{
                    '&.Mui-selected': {
                        backgroundColor: '#b5cafc',
                        color: '#e8f2fe',
                        borderRadius: '15px',
                        outline: '1px solid #b5cafc',
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: '#b5cafc',
                        color: '#e8f2fe',
                        borderRadius: '15px',
                    },
                }}
            >
                UK
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default LangSwitcher;
