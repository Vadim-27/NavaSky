import Link from 'next/link';
import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <Link href="/" className={scss.logo}>
            NAVASKY
        </Link>
    );
};

export default Logo;
