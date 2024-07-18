import { Box } from '@mui/material';
import OurServices from '@/components/OurServices';
import Contacts from '@/components/Contacts';
import OurTeam from '@/components/OurTeam';
// import Hero from '@/components/Hero';
import OurProjects from '@/components/OurProjects';
import Hero1 from '@/components/Hero1';

const HomePage = () => {
    return (
        <Box component="main">
            {/* <Hero /> */}
            <Hero1 />
            <OurServices />
            <OurProjects />
            <OurTeam />
            <Contacts />
        </Box>
    );
};

export default HomePage;
