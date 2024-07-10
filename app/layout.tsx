import { Box } from '@mui/material';
import type { Metadata } from 'next';
import '../styles/global.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <Box component="body">
                <Header />
                {children}
                <Footer />
            </Box>
        </html>
    );
};

export default RootLayout;
