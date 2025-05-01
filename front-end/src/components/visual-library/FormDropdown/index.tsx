import React from 'react';

interface FormDropdownProps {
    options: { label: string; value: string }[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const FormDropdown: React.FC<FormDropdownProps> = ({ options, value, onChange, placeholder }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)} className="form-dropdown">
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