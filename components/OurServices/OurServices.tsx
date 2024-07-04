import { Box, Container } from '@mui/material';
import Title from '../Title';
import Accordion from './Accordion';

const OurServices = () => {
    return (
        <Box component="section" className="py-[60px]">
            <Container className="max-w-screen-large">
                <Box className="mb-12">
                    <Title title="Our Services" />
                </Box>

                <Accordion />
            </Container>
        </Box>
    );
};

export default OurServices;
