import { Box, Link, List, ListItem, Stack, Typography } from '@mui/material';
import scss from './ContactsInfo.module.scss';
import Image from 'next/image';

const ContactsInfo = () => {
    return (
        <Box component="section" className={scss.contacts}>
            <Box>
                <Typography component="h3" className={scss.title}>
                    How can we help?
                </Typography>
                <Typography component="p" className={scss.description}>
                    Send us a message!
                </Typography>
            </Box>

            <Box component="div" className={scss.contactsInfo}>
                <List disablePadding className={scss.contactsList}>
                    <ListItem disableGutters disablePadding>
                        <Stack spacing="12px">
                            <Typography component="h4" className={scss.listItemTitle}>
                                Phone
                            </Typography>
                            <Typography component="p" className={scss.listItemInfo}>
                                +3800000000
                            </Typography>
                        </Stack>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <Stack spacing="12px">
                            <Typography component="h4" className={scss.listItemTitle}>
                                Email
                            </Typography>
                            <Typography component="p" className={scss.listItemInfo}>
                                navasky@gmail.com
                            </Typography>
                        </Stack>
                    </ListItem>
                </List>

                <List disablePadding className={scss.socialsList}>
                    <ListItem disableGutters disablePadding>
                        <Link
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src="/icons/instagram.svg"
                                width={40}
                                height={40}
                                alt="Instagram"
                            />
                        </Link>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <Link
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src="/icons/facebook.svg"
                                width={40}
                                height={40}
                                alt="Facebook"
                            />
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default ContactsInfo;
