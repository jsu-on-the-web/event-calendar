import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormTextInput from '../visual-library/FormTextInput';

interface AddEventFormProps {
    onSubmit: (event: { title: string; date: string; description: string }) => void;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = (data: { title: string; date: string; description: string; }) => {
        onSubmit(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div>
                <label htmlFor="title">Title:</label>
                <FormTextInput id="title" register={register} placeholder="Event Title" required />
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <FormTextInput id="date" register={register} placeholder="Event Date" required />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" {...register('description')} placeholder="Event Description" />
            </div>
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEventForm;