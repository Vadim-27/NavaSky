import { AppBar, Box, Container, Stack } from '@mui/material';
import Logo from './Logo';
import navigationPages from './navigations.json';
import Navigation from './Navigation';
import LangSwitcher from './LangSwitcher';
import scss from './Header.module.scss';

const Header = () => {
    return (
        <Box className={scss.header}>
            <Container className="max-w-screen-large">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className={scss.wrapper}
                >
                    <Logo />
                    <Navigation pages={navigationPages} />
                    <LangSwitcher />
                </Stack>
            </Container>
        </Box>
    );
};

export default Header;
