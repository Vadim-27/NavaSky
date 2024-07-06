import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { Backdrop, Box, Fade, IconButton, Modal as ReactModal } from '@mui/material';
import scss from './Modal.module.scss';

interface ModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ modalIsOpen, closeModal, children }) => {
    return (
        <ReactModal
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
                        <Image
                            src="/icons/close.svg"
                            width={25}
                            height={25}
                            alt="close icon"
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </IconButton>
                    {children}
                </Box>
            </Fade>
        </ReactModal>
    );
};

export default Modal;
