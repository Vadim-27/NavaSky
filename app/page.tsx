import { Box } from '@mui/material';
import OurServices from '@/components/OurServices';
import Contacts from '@/components/Contacts';
import OurTeam from '@/components/OurTeam';
import Hero from '@/components/Hero';
import OurProjects from '@/components/OurProjects';

const HomePage = () => {
    return (
        <Box component="main">
            <Hero />
            <OurServices />
            <OurProjects />
            <OurTeam />
            <Contacts />
        </Box>
    );
};

export default HomePage;
