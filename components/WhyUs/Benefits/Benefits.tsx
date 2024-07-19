'use client';
import clsx from 'clsx';
import { Box, Typography } from '@mui/material';
import OrbitaIcon, { Label } from '../OrbitaIcon';
import benefitsItems from '../benefitsItems';
import scss from './Benefits.module.scss';
import { useState } from 'react';

const icons = [Label.Individualism, Label.Creativity, Label.Support, Label.Quality];
const styles = [scss.individualism, scss.creativity, scss.support, scss.quality];

const Benefits = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const [description, setDescription] = useState<string>(
        'We are a cross-functional team offering our services to rising self-employed or small and medium entrepreneurs in scaling their presence in the field with effective websites.'
    );

    const handleActiveItem = (index: number) => {
        setActiveItem(index);
        setDescription(benefitsItems[index].description);
    };

    return (
        <Box component="section" className={scss.benefits}>
            <Typography variant="h4" className={scss.title}>
                NavaSky is...
            </Typography>

            <Box component="div" className={scss.benefitsWrapper}>
                {benefitsItems.map(({ label }, index) => (
                    <Box
                        key={label}
                        component="div"
                        className={clsx(scss.benefitsItem, styles[index])}
                    >
                        <OrbitaIcon label={icons[index]} isActive={activeItem === index} />
                        <Box
                            component="button"
                            onClick={() => handleActiveItem(index)}
                            className={clsx(scss.chipBenefits, styles[index], {
                                [scss.active]: activeItem === index,
                            })}
                        >
                            {label}
                        </Box>
                    </Box>
                ))}
            </Box>

            <Typography variant="body1" className={scss.description}>
                {description}
            </Typography>
        </Box>
    );
};

export default Benefits;
