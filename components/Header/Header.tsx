import { AppBar, Container, Stack } from '@mui/material';
import Logo from './Logo';
import navigationPages from './navigations.json';
import Navigation from './Navigation';
import LangSwitcher from './LangSwitcher';
import scss from './Header.module.scss';

const Header = () => {
    return (
        <AppBar position="static" className={scss.header}>
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
        </AppBar>
    );
};

export default Header;
