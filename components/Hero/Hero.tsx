import scss from './Hero.module.scss';
import { Box, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Mountain from './Mountain';

const Hero = () => {
    return (
        <Box component="section" className={scss.hero}>
            <div className={scss.titleHero}>
                <Typography className={scss.titleHeroText}>NavaSky</Typography>
                <Image
                    className={scss.lineHero}
                    src="/icons/lineHero.svg"
                    width={380}
                    height={43}
                    alt="lineHero"
                />
            </div>

            <Typography component="p" className={scss.textHero}>
                We help brands scale by bringing date driven decisions and creativity together for a
                full-funnel marketing approach
            </Typography>
            <div>
                <Link href="#" target="_blank" rel="" className={scss.btnLetsTalk}>
                    <div className={scss.btnHeroText}>Let’s talk</div>
                    <Image src="/icons/circle-arrow.svg" width={33} height={33} alt="Narrov" />
                </Link>
            </div>

            <Mountain />
        </Box>
    );
};

export default Hero;
