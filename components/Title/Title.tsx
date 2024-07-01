import { Typography } from '@mui/material';
import { FC } from 'react';
import scss from './Title.module.scss';

export interface TitleProps {
    title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
    return (
        <Typography component="h2" className={scss.title}>
            {title}
        </Typography>
    );
};

export default Title;
