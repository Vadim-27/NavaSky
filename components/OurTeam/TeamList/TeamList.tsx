'use client';
import { Fragment, useState } from 'react';
import { Button, Grid } from '@mui/material';
import TeamListItem from './TeamListItem';
import Modal from '@/components/Modal';
import PersonModal from './PersonModal';
import teamItems from '../team';
import scss from './TeamList.module.scss';

const TeamList = () => {
    const [personId, setPersonId] = useState<number | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [qtyItems, setQtyItems] = useState<number>(6);

    const handlePersonId = (id: number) => {
        setPersonId(id);
        setModalIsOpen(true);
    };

    const person = teamItems.find(({ id }) => id === personId);

    return (
        <>
            <Grid container columnSpacing={18} rowSpacing={8}>
                {teamItems.map((item, index) => (
                    <Fragment key={item.id}>
                        {index < qtyItems && (
                            <TeamListItem {...item} handleClick={handlePersonId} />
                        )}
                    </Fragment>
                ))}
                {qtyItems < teamItems.length && (
                    <Button
                        variant="contained"
                        onClick={() => setQtyItems(teamItems.length)}
                        className={scss.loadMore}
                    >
                        See more
                    </Button>
                )}
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
