import { Box } from '@mui/material';
import OurServices from '@/components/OurServices';
import Contacts from '@/components/Contacts';
import OurTeam from '@/components/OurTeam';

const HomePage = () => {
    return (
        <Box component="main">
            <OurServices />
            <OurTeam />
            <Contacts />
        </Box>
    );
};

export default HomePage;
