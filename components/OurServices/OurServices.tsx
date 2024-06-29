'use client';

import Image from 'next/image';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Divider,
    ListItem,
    Stack,
    Typography,
} from '@mui/material';
import Title from '../Title';
import { website_development } from '@/public/images/our-services';
import scss from './OurServices.module.scss';
import { useState } from 'react';

const OurServices = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleChange = (isExpanded: boolean | ((prevState: boolean) => boolean)) => {
        setExpanded(isExpanded);
    };
    return (
        <Box component="section" className={scss.servicesSection}>
            <Container maxWidth="lg">
                <Box className="mb-12">
                    <Title title="Our Services" />
                </Box>

                <Accordion
                    disableGutters
                    expanded={expanded}
                    onChange={(event, isExpanded) => handleChange(isExpanded)}
                    className={scss.accordion}
                >
                    <AccordionSummary
                        expandIcon={
                            <svg className={scss.arrowIcon}>
                                <use href="/icons/icons.svg#icon-circle-arrow"></use>
                            </svg>
                        }
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={scss.accordionSummary}
                    >
                        <Divider className={scss.divider} />

                        <Typography className={scss.number}>01</Typography>
                        <Box className={scss.content}>
                            <Image
                                src={website_development}
                                alt="Website Development"
                                sizes="100vw"
                                priority
                                className={expanded ? `${scss.image} ${scss.visible}` : scss.image}
                            />

                            <Box>
                                <Typography component="h3" className={scss.title}>
                                    Website Development
                                </Typography>
                                <Stack
                                    component="ul"
                                    direction="row"
                                    flexWrap="wrap"
                                    gap="15px"
                                    maxWidth="376px"
                                >
                                    <ListItem className={scss.listItem}>HTML & CSS</ListItem>
                                    <ListItem className={scss.listItem}>
                                        JavaScript & TypeScript
                                    </ListItem>
                                    <ListItem className={scss.listItem}>React</ListItem>
                                    <ListItem className={scss.listItem}>Node.js</ListItem>
                                </Stack>

                                <Typography
                                    className={
                                        expanded
                                            ? `${scss.descriptionVisible} ${scss.visibleText}`
                                            : scss.descriptionVisible
                                    }
                                >
                                    Lorem ipsum dolor sit amet consectetur. Scelerisque sed libero
                                    egestas urna. Sed rhoncus lobortis massa eget amet mattis sapien
                                    eget
                                </Typography>
                            </Box>
                        </Box>
                        <Divider className={scss.dividerAfter} />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={scss.descriptionHidden}>
                            Lorem ipsum dolor sit amet consectetur. Scelerisque sed libero egestas
                            urna. Sed rhoncus lobortis massa eget amet mattis sapien eget
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Box>
    );
};

export default OurServices;
