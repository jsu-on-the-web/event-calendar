import React from 'react';

interface FormDropdownProps {
    id: string;
    options: { label: string; value: string }[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
    register: any;
    placeholder?: string;
}

const FormDropdown: React.FC<FormDropdownProps> = ({ id, options, value, onChange, className, placeholder }) => {
    return (
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={`form-dropdown ${className}`}>
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default FormDropdown;