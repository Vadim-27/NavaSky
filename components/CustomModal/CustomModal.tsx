import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { Backdrop, Box, Fade, IconButton, Modal } from '@mui/material';
import closeIcon from '@/public/icons/close.svg';
import scss from './CustomModal.module.scss';

interface ModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    children: ReactNode;
}

const CustomModal: FC<ModalProps> = ({ modalIsOpen, closeModal, children }) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalIsOpen}
            onClose={closeModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={modalIsOpen}>
                <Box component="div" className={scss.modal}>
                    <IconButton
                        aria-label="close"
                        className={scss.closeButton}
                        onClick={closeModal}
                    >
                        <Image src={closeIcon} alt="close icon" />
                    </IconButton>
                    {children}
                </Box>
            </Fade>
        </Modal>
    );
};

export default CustomModal;
