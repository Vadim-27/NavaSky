'use client';
import { SyntheticEvent, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import scss from './LangSwitcher.module.scss';

const LangSwitcher = () => {
    const [alignment, setAlignment] = useState('en');

    const handleChange = (_: SyntheticEvent, newAlignment: string) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
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
