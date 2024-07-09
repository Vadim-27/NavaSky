import { FC } from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import scss from './Navigation.module.scss';
import { useTranslations } from 'next-intl';

interface NavigationPagesProps {
    label: string;
    href: string;
}

interface NavigationProps {
    pages: NavigationPagesProps[];
}

const Navigation: FC<NavigationProps> = ({ pages }) => {
    const t = useTranslations('Header');

    return (
        <Box component="div" className={scss.navigationList}>
            {pages.map(({ href, label }) => (
                <Link href={href} key={label} className={scss.navigationLink}>
                    {t(label)}
                </Link>
            ))}
        </Box>
    );
};

export default Navigation;
