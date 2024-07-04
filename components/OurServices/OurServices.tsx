import { Box, Container } from '@mui/material';
import Title from '../Title';
import Accordion from './Accordion';

const OurServices = () => {
    return (
        <Box component="section" sx={{ p: '60px 0' }}>
            <Container maxWidth="lg">
                <Title title="Our Services" />
                <Accordion />
            </Container>
        </Box>
    );
};

export default OurServices;
