import { FC } from 'react';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import scss from './SliderItem.module.scss';

interface SliderItemProps {
    id: number;
    number: string;
    label: string;
    image: string;
    title: string;
    description: string;
    link: string;
}

const SliderItem: FC<SliderItemProps> = ({ title, description, number, label, image, link }) => {
    return (
        <Box className={scss.sliderItem}>
            <Box>
                <Typography variant="h4" className={scss.number}>{`${number}.`}</Typography>
                <Typography variant="body1" className={scss.label}>
                    {label}
                </Typography>
            </Box>
            <Box component="div" className={scss.mainInfo}>
                <Image src={image} width={147} height={108} alt={title} className={scss.image} />
                <Box>
                    <Typography variant="h3" className={scss.title}>
                        {title}
                    </Typography>
                    <Typography variant="body1" className={scss.description}>
                        {description}
                    </Typography>
                </Box>
            </Box>
            <Button
                variant="contained"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={scss.link}
            >
                View Website
            </Button>
        </Box>
    );
};

export default SliderItem;
