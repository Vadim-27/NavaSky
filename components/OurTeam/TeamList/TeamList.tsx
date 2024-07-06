'use client';
import { useState } from 'react';
import { Grid } from '@mui/material';
import TeamListItem from './TeamListItem';
import Modal from '@/components/Modal';
import PersonModal from './PersonModal';
import teamItems from '../team';

const TeamList = () => {
    const [personId, setPersonId] = useState<number | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const handlePersonId = (id: number) => {
        setPersonId(id);
        setModalIsOpen(true);
    };

    const person = teamItems.find(({ id }) => id === personId);

    return (
        <>
            <Grid container columnSpacing={18} rowSpacing={8}>
                {teamItems.map((item) => (
                    <TeamListItem key={item.id} {...item} handleClick={handlePersonId} />
                ))}
            </Grid>

            {person && (
                <Modal modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}>
                    <PersonModal {...person} />
                </Modal>
            )}
        </>
    );
};

export default TeamList;
