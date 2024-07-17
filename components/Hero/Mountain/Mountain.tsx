import scss from './Mountain.module.scss';
import { Box } from '@mui/material';
import Image from 'next/image';

const Mountain = () => {
    return (
        <Box component="section" className={scss.mountains}>
            <div className={scss.mountain1}>
                <Image src="/icons/mount-1.svg" width={415} height={259} alt="mount-1" />
            </div>
            <div className={scss.mountain2}>
                <Image src="/icons/mount-2.svg" width={1600} height={452} alt="mount-2" />
            </div>
            <div className={scss.mountain3}>
                <Image src="/icons/mount-3.svg" width={1437} height={349} alt="mount-3" />
            </div>
            <div className={scss.mountain4}>
                <Image src="/icons/mount-4.svg" width={951.648} height={242.311} alt="mount-4" />
            </div>
            <div className={scss.mountain5}>
                <Image src="/icons/mount-5.svg" width={1099} height={299} alt="mount-5" />
            </div>
            <div className={scss.mountain6}>
                <Image src="/icons/mount-6.svg" width={680} height={340} alt="mount-6" />
            </div>
        </Box>
    );
};

export default Mountain;
