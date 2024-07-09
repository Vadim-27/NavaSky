import { FC } from 'react';
import Image from 'next/image';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    List,
    ListItem,
    ListItemIcon,
    Typography,
} from '@mui/material';
import { TeamItemProps } from '../TeamListItem';
import scss from './PersonInfo.module.scss';

const PersonInfo: FC<TeamItemProps> = ({
    name,
    position,
    image,
    description,
    instagram,
    linkedin,
}) => {
    return (
        <Card className={scss.card}>
            <CardMedia
                sx={{ height: 170, width: 200 }}
                image={image}
                title={name}
                className={scss.image}
            />
            <CardContent className={scss.content}>
                <Typography variant="h5" className={scss.title}>
                    {name}
                </Typography>
                <Typography variant="body2" component="p" className={scss.position}>
                    {position}
                </Typography>
                <Box component="div" className={scss.description}>
                    {description.map((text, index) => (
                        <Typography key={index} component="p">
                            {text}
                        </Typography>
                    ))}
                </Box>
            </CardContent>
            <CardActions>
                <List className={scss.socials}>
                    <ListItem>
                        <Link href={linkedin}>
                            <ListItemIcon>
                                <Image
                                    src="/icons/linkedin.svg"
                                    width={39}
                                    height={39}
                                    alt="linkedin"
                                />
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={instagram}>
                            <ListItemIcon>
                                <Image
                                    src="/icons/instagram.svg"
                                    width={39}
                                    height={39}
                                    alt="instagram"
                                />
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                </List>
            </CardActions>
        </Card>
    );
};

export default PersonInfo;
