import { Box } from '@mui/material';
import OurServices from '@/components/OurServices';
import Contacts from '@/components/Contacts';

const HomePage = () => {
    return (
        <Box component="main">
            <OurServices />
            <Contacts />
        </Box>
    );
};

export default HomePage;
