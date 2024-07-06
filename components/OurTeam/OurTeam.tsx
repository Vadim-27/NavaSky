import { Box, Container } from '@mui/material';
import Title from '../Title';
import TeamList from './TeamList';

const OurTeam = () => {
    return (
        <Box component="section" className="py-[60px]" id="team">
            <Container className="max-w-screen-large">
                <Box className="mb-12">
                    <Title title="Our Team" />
                </Box>

                <Container className="max-w-[1268px]">
                    <TeamList />
                </Container>
            </Container>
        </Box>
    );
};

export default OurTeam;
