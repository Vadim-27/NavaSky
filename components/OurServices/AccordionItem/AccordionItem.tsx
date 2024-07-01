import { FC, SyntheticEvent } from 'react';
import Image from 'next/image';
import {
    Accordion as MuiAccordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    ListItem,
    Stack,
    Typography,
} from '@mui/material';
import { ServicesItemProps } from '../services';
import scss from './AccordionItem.module.scss';

interface AccordionItemProps extends ServicesItemProps {
    expandedPanel: string | false;
    onChange: (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => void;
}

const AccordionItem: FC<AccordionItemProps> = ({
    label,
    description,
    image,
    instruments,
    title,
    expandedPanel,
    onChange,
}) => {
    const isExpanded = expandedPanel === label;
    const displayedInstruments = isExpanded ? instruments : instruments.slice(0, 3);

    return (
        <MuiAccordion
            disableGutters
            expanded={isExpanded}
            onChange={onChange(label)}
            className={scss.accordion}
        >
            <AccordionSummary
                expandIcon={
                    <svg className={scss.arrowIcon}>
                        <use href="/icons/icons.svg#icon-circle-arrow"></use>
                    </svg>
                }
                aria-controls={`panel-${label}-content`}
                id={`panel-${label}-header`}
                className={scss.accordionSummary}
            >
                {label === '01' && <Divider className={scss.divider} />}
                <Typography className={scss.number}>{label}</Typography>
                <Box className={scss.content}>
                    <Image
                        src={image}
                        alt={title}
                        sizes="100vw"
                        priority
                        className={isExpanded ? `${scss.image} ${scss.visible}` : scss.image}
                    />
                    <Box>
                        <Typography component="h3" className={scss.title}>
                            {title}
                        </Typography>
                        <Stack
                            component="ul"
                            direction="row"
                            flexWrap="wrap"
                            gap="15px"
                            maxWidth="376px"
                        >
                            {displayedInstruments.map((instrument) => (
                                <ListItem key={instrument} className={scss.listItem}>
                                    {instrument}
                                </ListItem>
                            ))}
                        </Stack>
                        <Typography
                            className={
                                isExpanded
                                    ? `${scss.descriptionVisible} ${scss.visibleText}`
                                    : scss.descriptionVisible
                            }
                        >
                            {description}
                        </Typography>
                    </Box>
                </Box>
                <Divider className={scss.dividerAfter} />
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={scss.descriptionHidden}>{description}</Typography>
            </AccordionDetails>
        </MuiAccordion>
    );
};

export default AccordionItem;
