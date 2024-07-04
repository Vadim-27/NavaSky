'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Stack, TextField } from '@mui/material';
import scss from './ContactsForm.module.scss';

interface ContactsFormProps {
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    message: string;
}

const validationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Must be a valid email').required('Email is required'),
    title: yup.string().required('Title is required'),
    message: yup.string().required('Message is required'),
});

const ContactsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactsFormProps>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<ContactsFormProps> = (data) => console.log(data);

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className={scss.form}>
            <Box component="div" className={scss.formWrapper}>
                <Stack direction="row" spacing={3}>
                    <Box component="div" sx={{ width: '50%' }}>
                        <TextField
                            fullWidth
                            {...register('firstName')}
                            label="First name"
                            variant="filled"
                            className={scss.formField}
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                        />
                    </Box>
                    <Box component="div" sx={{ width: '50%' }}>
                        <TextField
                            fullWidth
                            {...register('lastName')}
                            label="Last name"
                            variant="filled"
                            className={scss.formField}
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                        />
                    </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                    <Box component="div" sx={{ width: '50%' }}>
                        <TextField
                            fullWidth
                            {...register('email')}
                            label="Email"
                            variant="filled"
                            className={scss.formField}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </Box>
                    <Box component="div" sx={{ width: '50%' }}>
                        <TextField
                            fullWidth
                            {...register('title')}
                            label="Title"
                            variant="filled"
                            className={scss.formField}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />
                    </Box>
                </Stack>
                <TextField
                    fullWidth
                    {...register('message')}
                    label="Message"
                    variant="filled"
                    multiline
                    rows={6}
                    className={scss.formField}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                />
            </Box>
            <Button type="submit" variant="contained" className={scss.submitButton}>
                Submit
            </Button>
        </Box>
    );
};

export default ContactsForm;
