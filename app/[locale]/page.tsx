import { Box } from '@mui/material';
import OurServices from '@/components/OurServices';
import Contacts from '@/components/Contacts';
import Hero from '@/components/Hero';

const HomePage = () => {
    return (
        <Box component="main">
            <Hero />
            <OurServices />
            <Contacts />
        </Box>
    );
};

export default HomePage;
