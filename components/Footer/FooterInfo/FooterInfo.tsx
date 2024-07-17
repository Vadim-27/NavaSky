import Link from 'next/link';
import Image from 'next/image';
import { Box, List, ListItem, Typography } from '@mui/material';
import email from '@/public/icons/email.svg';
import phone from '@/public/icons/phone.svg';
import instagram from '@/public/icons/instagram.svg';
import behance from '@/public/icons/behance.svg';
import linkedin from '@/public/icons/linkedin.svg';
import facebook from '@/public/icons/facebook.svg';
import scss from './FooterInfo.module.scss';

const FooterInfo = () => {
    return (
        <Box component="section">
            <List className={scss.contactList}>
                <ListItem className={scss.contactItem}>
                    <Image src={email} alt="navasky@gmail.com" className={scss.contactIcon} />
                    <Typography component="p" className={scss.contactInfo}>
                        navasky@gmail.com
                    </Typography>
                </ListItem>
                <ListItem className={scss.contactItem}>
                    <Image src={phone} alt="+3800000000" className={scss.contactIcon} />
                    <Typography component="p" className={scss.contactInfo}>
                        +3800000000
                    </Typography>
                </ListItem>
            </List>

            <List className={scss.socialList}>
                <ListItem className={scss.socialItem}>
                    <Link href="#" target="_blank" rel="noopener norefferer">
                        <Image src={behance} alt="behance" className={scss.socialIcon} />
                    </Link>
                </ListItem>
                <ListItem className={scss.socialItem}>
                    <Link href="#" target="_blank" rel="noopener norefferer">
                        <Image src={linkedin} alt="linkedin" className={scss.socialIcon} />
                    </Link>
                </ListItem>
                <ListItem className={scss.socialItem}>
                    <Link href="#" target="_blank" rel="noopener norefferer">
                        <Image src={instagram} alt="instagram" className={scss.socialIcon} />
                    </Link>
                </ListItem>
                <ListItem className={scss.socialItem}>
                    <Link href="#" target="_blank" rel="noopener norefferer">
                        <Image src={facebook} alt="facebook" className={scss.socialIcon} />
                    </Link>
                </ListItem>
            </List>
        </Box>
    );
};

export default FooterInfo;
