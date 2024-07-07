import scss from './Hero.module.scss';
import { Box, Container, Link, List, ListItem, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Hero = () => {
    return (
        <Box component="section" className={scss.hero}>
            <Stack direction="column" alignItems="center">
                <Typography component="h1" className={scss.titleHero}>
                    NavaSky
                </Typography>
                <Image
                    className={scss.lineHero}
                    src="/icons/lineHero.svg"
                    width={380}
                    height={43}
                    alt="lineHero"
                />

                <Typography component="p" className={scss.textHero}>
                    We help brands scale by bringing date driven decisions and creativity together
                    for a full-funnel marketing approach
                </Typography>
                <div>
                    <Link href="#" target="_blank" rel="" className={scss.btnLetsTalk}>
                        <div className={scss.btnHeroText}>Let’s talk</div>
                        <Image src="/icons/circle-arrow.svg" width={33} height={33} alt="Narrov" />
                    </Link>
                </div>
            </Stack>
        </Box>
    );
};

export default Hero;
