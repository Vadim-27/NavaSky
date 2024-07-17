import { Box, Container, Divider, Stack } from '@mui/material';
import FooterMain from './FooterMain';
import FooterInfo from './FooterInfo';

const Footer = () => {
    return (
        <Box component="footer">
            <Container className="max-w-screen-large">
                <Divider />
                <Stack direction="row" justifyContent="space-between" sx={{ p: '44px 0' }}>
                    <FooterMain />
                    <FooterInfo />
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
