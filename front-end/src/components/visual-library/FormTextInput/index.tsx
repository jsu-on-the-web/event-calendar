export const FormTextInput = (
    id: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required: boolean,
    className: string,
    placeholder: string
) => {
    return (
        <input
            type="text"
            id={id}
            onChange={onChange}
            required={required}
            className={`form-text-input ${className}`}
            placeholder={placeholder}
        />
    );
};

export default FormTextInput;