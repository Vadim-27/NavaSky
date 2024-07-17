import { Box, Container } from '@mui/material';
import Title from '../Title';
import Slider from './Slider';

const OurProjects = () => {
    return (
        <Box component="section" className="py-[60px]" id="projects">
            <Container className="max-w-screen-large">
                <Box className="mb-12">
                    <Title title="Our Projects" />
                </Box>

                <Slider />
            </Container>
        </Box>
    );
};

export default OurProjects;
