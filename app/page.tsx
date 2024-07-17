import { Box } from '@mui/material';
import OurServices from '@/components/OurServices';
import Contacts from '@/components/Contacts';
import OurTeam from '@/components/OurTeam';
import Hero from '@/components/Hero';

const HomePage = () => {
    return (
        <Box component="main">
            <Hero />
            <OurServices />
            <OurTeam />
            <Contacts />
        </Box>
    );
};

export default HomePage;
