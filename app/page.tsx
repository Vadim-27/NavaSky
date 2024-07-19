import { Box } from '@mui/material';
import OurServices from '@/components/OurServices';
import Contacts from '@/components/Contacts';
import OurTeam from '@/components/OurTeam';
// import Hero from '@/components/Hero';
import OurProjects from '@/components/OurProjects';
import Hero1 from '@/components/Hero1';
import WhyUs from '@/components/WhyUs';

const HomePage = () => {
    return (
        <Box component="main">
            {/* <Hero /> */}
            <Hero1 />
            <WhyUs />
            <OurServices />
            <OurProjects />
            <OurTeam />
            <Contacts />
        </Box>
    );
};

export default HomePage;
