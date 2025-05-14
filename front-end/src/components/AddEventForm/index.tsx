import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormTextInput from '../visual-library/FormTextInput';
import FormDatePicker from '../visual-library/FormDatePicker';

interface AddEventFormProps {
    onSubmit: (event: { title: string; date: string; description: string }) => void;
}

interface Inputs {
    title: string;
    begindate: string;
    enddate?: string;
    description: string;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<Inputs>();
    // Use SelectedDateContextProvider 
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const handleFormSubmit: SubmitHandler<{ title: string; beginDate: string; endDate: string; description: string; }> = (data) => {
        onSubmit(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label htmlFor="title">Title:</label>
            <FormTextInput id="title" {...register("title", { required: true })} placeholder="Event Title" className='title' required
                aria-invalid={errors.title? "title" : "false"} />
                {errors.title && <span className="error">{errors.title.message}</span>}
            
            <label htmlFor="begin-date">Date:</label>
            <FormDatePicker id="begin-date" {...register("begindate", {required: true})}  className='begin-date' selectedDate={null} />
            {errors.begindate && <span className="error">{errors.begindate.message}</span>}
            
            <label htmlFor="end-date">End Date:</label>
            <FormDatePicker id="end-date" {...register('enddate')} className='end-date' selectedDate={null} />
            {errors.enddate && <span className="error">{errors.enddate.message}</span>}
            
                <label htmlFor="description">Description:</label>
            <textarea id="description" {...register('description')} placeholder="Event Description" />
            {errors.description && <span className="error">{errors.description.message}</span>}
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEventForm;