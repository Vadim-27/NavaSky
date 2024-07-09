import { FC } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    SvgIcon,
    Typography,
} from '@mui/material';
import scss from './TeamListItem.module.scss';

export interface TeamItemProps {
    id: number;
    image: string;
    name: string;
    position: string;
    description: string[];
    linkedin: string;
    instagram: string;
}

interface TeamListItemProps extends TeamItemProps {
    handleClick: (id: number) => void;
}

const TeamListItem: FC<TeamListItemProps> = ({ id, image, name, position, handleClick }) => {
    return (
        <Grid key={id} item xs={3}>
            <Card className={scss.card}>
                <CardMedia component="img" image={image} alt={name} className={scss.image} />
                <CardContent className={scss.content}>
                    <Typography variant="h5" className={scss.title}>
                        {name}
                    </Typography>
                    <Typography variant="body2" component="p" className={scss.position}>
                        {position}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className={scss.button} onClick={() => handleClick(id)}>
                        Read bio
                        <SvgIcon className={scss.arrowIcon}>
                            <use href="/icons/icons.svg#icon-arrow"></use>
                        </SvgIcon>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default TeamListItem;
