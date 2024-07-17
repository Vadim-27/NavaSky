'use client';
import Carousel from 'react-material-ui-carousel';
import projects from '../projects';
import SliderItem from './SliderItem';

const Slider = () => {
    return (
        <Carousel indicators={false} navButtonsAlwaysInvisible={true} sx={{ height: '100%' }}>
            {projects.map((item) => (
                <SliderItem key={item.id} {...item} />
            ))}
        </Carousel>
    );
};

export default Slider;
