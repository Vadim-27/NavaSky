import { Box, Typography } from '@mui/material';
import Logo, { LogoStyle } from '@/components/Logo';
import scss from './FooterMain.module.scss';

const FooterMain = () => {
    return (
        <Box component="section">
            <Logo style={LogoStyle.Footer} />
            <Typography component="p" className={scss.description}>
                With us, everything is like a game - exciting and in constant motion
            </Typography>
        </Box>
    );
};

export default FooterMain;
