'use client';
import { SyntheticEvent, useState, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import scss from './LangSwitcher.module.scss';

const LangSwitcher = () => {
    const [alignment, setAlignment] = useState('en');
    const router = useRouter();
    const localeActive = useLocale();
    const pathname = usePathname();

    useEffect(() => {
        setAlignment(localeActive);
    }, [localeActive]);

    const handleChange = (_: SyntheticEvent, newAlignment: string) => {
        if (newAlignment !== null && newAlignment !== localeActive) {
            const newUrl = `/${newAlignment}${pathname.replace(`/${localeActive}`, '')}`;
            router.push(newUrl);
        }
    };

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
                value="ua"
                aria-label="ua"
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
