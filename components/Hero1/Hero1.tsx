'use client';
import Image from 'next/image';
import { MouseEvent, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { Box, Button, SvgIcon, Typography } from '@mui/material';
import scss from './Hero1.module.scss';

const Hero1 = () => {
    const sceneRef = useRef<HTMLDivElement>(null);

    const speeds = useMemo(() => [10, 30, 100], []);

    const handleParallax = (event: MouseEvent<HTMLDivElement>) => {
        if (sceneRef.current) {
            const layers = sceneRef.current.querySelectorAll(`.${scss.layer}`);
            layers.forEach((layer, index) => {
                const speed = speeds[index];
                (layer as HTMLElement).style.transform =
                    `translateX(${(event.clientX * speed) / 1000}px)`;
            });
        }
    };

    const sceneClass = useMemo(() => clsx(scss.scene), []);

    return (
        <Box component="section" className={scss.hero} onMouseMove={handleParallax}>
            <Box component="div" className={scss.mainInfo}>
                <Box component="div" className={scss.title}>
                    <Typography variant="h1" className={scss.titleText}>
                        NavaSky
                    </Typography>
                    <Image
                        src="/icons/lineHero.svg"
                        width={380}
                        height={43}
                        alt="NavaSky"
                        className={scss.titleLine}
                    />
                </Box>
                <Typography variant="body1" className={scss.description}>
                    We see ourselves as partners of our clients, launching their websites into the
                    orbit of success through full-funnel marketing approach
                </Typography>
                <Button
                    variant="contained"
                    endIcon={
                        <SvgIcon className={scss.arrowIcon}>
                            <use href="/icons/icons.svg#icon-circle-arrow"></use>
                        </SvgIcon>
                    }
                    className={scss.link}
                >
                    Let’s talk
                </Button>
            </Box>

            <Box component="div" className={sceneClass} ref={sceneRef} onMouseMove={handleParallax}>
                <Box component="div" className={clsx(scss.layer, scss.bg)}></Box>
                <Box component="div" className={clsx(scss.layer, scss.mountains_1)}></Box>
                <Box component="div" className={clsx(scss.layer, scss.mountains_2)}></Box>
            </Box>
        </Box>
    );
};

export default Hero1;
