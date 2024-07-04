import { FC } from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import scss from './Navigation.module.scss';

interface NavigationPagesProps {
    label: string;
    href: string;
}

interface NavigationProps {
    pages: NavigationPagesProps[];
}

const Navigation: FC<NavigationProps> = ({ pages }) => {
    return (
        <Box component="div" className={scss.navigationList}>
            {pages.map(({ href, label }) => (
                <Link href={href} key={label} className={scss.navigationLink}>
                    {label}
                </Link>
            ))}
        </Box>
    );
};

export default Navigation;
