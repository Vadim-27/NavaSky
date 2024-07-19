import { Box, Container } from '@mui/material';
import Title from '../Title';
import Benefits from './Benefits';

const WhyUs = () => {
    return (
        <Box component="section" className="py-[60px]" id="why-us">
            <Container className="max-w-screen-large">
                <Box className="mb-12">
                    <Title title="Why us" />
                </Box>

                <Benefits />
            </Container>
        </Box>
    );
};

export default WhyUs;
