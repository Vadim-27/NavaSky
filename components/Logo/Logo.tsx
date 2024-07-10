import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import scss from './Logo.module.scss';

export enum LogoStyle {
    Header,
    Footer,
}

interface LogoProps {
    style: LogoStyle;
}

const Logo: FC<LogoProps> = ({ style }) => {
    return (
        <Link
            href="/"
            className={clsx(
                scss.logo,
                style === LogoStyle.Header && scss.logoHeader,
                style === LogoStyle.Footer && scss.logoFooter
            )}
        >
            NAVASKY
        </Link>
    );
};

export default Logo;
