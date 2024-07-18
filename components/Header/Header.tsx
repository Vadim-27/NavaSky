import { Box, Container } from '@mui/material';
import Logo, { LogoStyle } from '../Logo';
import navigationPages from './navigations.json';
import Navigation from './Navigation';
import LangSwitcher from './LangSwitcher';
import scss from './Header.module.scss';

const Header = () => {
    return (
        <Box component="header" className={scss.header}>
            <Container className="max-w-screen-large">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    className={scss.wrapper}
                >
                    <Logo style={LogoStyle.Header} />
                    <Navigation pages={navigationPages} />
                    <LangSwitcher />
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
