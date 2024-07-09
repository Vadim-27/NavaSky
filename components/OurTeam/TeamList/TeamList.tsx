'use client';
import { Fragment, useState } from 'react';
import { Button, Grid } from '@mui/material';
import TeamListItem from './TeamListItem';
import CustomModal from '@/components/CustomModal';
import PersonInfo from './PersonInfo';
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
                <CustomModal modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}>
                    <PersonInfo {...person} />
                </CustomModal>
            )}
        </>
    );
};

export default TeamList;
