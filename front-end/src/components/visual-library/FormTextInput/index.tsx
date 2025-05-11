interface FormTextInputProps {
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
    className: string;
    placeholder: string;
    register?: any;
};

export const FormTextInput: React.FC<FormTextInputProps> = (
    { id, onChange, required, className, placeholder, register }
) => {
    return (
        <input
            type="text"
            id={id}
            {...(register ? register(id) : {})} // Registering the input as per react-hook-form
            onChange={onChange}
            required={required}
            className={`form-text-input ${className}`}
            placeholder={placeholder}
        />
    );
};

export default FormTextInput;