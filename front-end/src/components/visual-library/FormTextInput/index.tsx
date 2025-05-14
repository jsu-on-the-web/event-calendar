interface FormTextInputProps {
    id: string;
    required: boolean;
    className: string;
    placeholder: string;
};

export const FormTextInput: React.FC<FormTextInputProps> = (
    { id, required, className, placeholder }
) => {
    return (
        <input
            type="text"
            id={id}
            required={required}
            className={`form-text-input ${className}`}
            placeholder={placeholder}
        />
    );
};

export default FormTextInput;