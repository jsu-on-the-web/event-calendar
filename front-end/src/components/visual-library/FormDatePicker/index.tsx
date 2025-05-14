import React from 'react';

interface FormDatePickerProps {
    id: string;
    className?: string;
    selectedDate: Date | null;
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({ id, className, selectedDate, onDateChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = event.target.value ? new Date(event.target.value) : null;
        onDateChange(newDate);
    };

    return (
        <div>
            <input
                type="date"
                value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                onChange={handleChange}
            />
        </div>
    );
};

export default FormDatePicker;
