'use client';
import { Box, Container } from '@mui/material';
import Title from '../Title';
import Accordion from './Accordion';
import { useTranslation } from '@/i18n/i18n';
import { translations } from '@/i18n/i18n.constants';

const OurServices = () => {
    const { t } = useTranslation(translations.ourServices);
    return (
        <Box component="section" className="py-[60px]" id="services">
            <Container className="max-w-screen-large">
                <Box className="mb-12">
                    <Title title={t('title')} />
                </Box>

                <Accordion />
            </Container>
        </Box>
    );
};

export default OurServices;
