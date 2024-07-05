import { Box, Container, Stack } from '@mui/material';
import Title from '../Title';
import ContactsInfo from './ContactsInfo';
import ContactsForm from './ContactsForm';

const Contacts = () => {
    return (
        <Box component="section" sx={{ pb: '120px', pt: '60px' }} id="contacts">
            <Container className="max-w-screen-large">
                <Title title="Contacts" />
                <Stack direction="row" spacing={4}>
                    <ContactsInfo />
                    <ContactsForm />
                </Stack>
            </Container>
        </Box>
    );
};

export default Contacts;
