import { StaticImageData } from 'next/image';
import { web_design, website_development } from '@/public/images/our-services';

export interface ServicesItemProps {
    label: string;
    title: string;
    instruments: string[];
    description: string;
    image: StaticImageData;
}

const services: ServicesItemProps[] = [
    {
        label: '01',
        title: 'Website Development',
        instruments: ['HTML & CSS', 'JavaScript & TypeScript', 'React', 'Node.js'],
        description:
            'Lorem ipsum dolor sit amet consectetur. Scelerisque sed libero egestas urna. Sed rhoncus lobortis massa eget amet mattis sapien eget',
        image: website_development,
    },

    {
        label: '02',
        title: 'Web Design',
        instruments: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
        description:
            'Lorem ipsum dolor sit amet consectetur. Scelerisque sed libero egestas urna. Sed rhoncus lobortis massa eget amet mattis sapien eget',
        image: web_design,
    },
    {
        label: '03',
        title: 'Testing',
        instruments: ['Zephyr', 'TestRail', 'Postman'],
        description:
            'Lorem ipsum dolor sit amet consectetur. Scelerisque sed libero egestas urna. Sed rhoncus lobortis massa eget amet mattis sapien eget',
        image: web_design,
    },
    {
        label: '04',
        title: 'Consulting',
        instruments: ['Competitive analysis', 'Email newsletters'],
        description:
            'Lorem ipsum dolor sit amet consectetur. Scelerisque sed libero egestas urna. Sed rhoncus lobortis massa eget amet mattis sapien eget',
        image: web_design,
    },
];

export default services;
