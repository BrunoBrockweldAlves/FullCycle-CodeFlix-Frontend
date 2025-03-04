import React from 'react';

export type InputFieldProps = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({
    id, label, type, placeholder,
}) => {
    return (
        <div className='mt-8 flex flex-col space-y-4'>
            <label htmlFor='email' className='text-sm font-semibold text-gray-500'>
                {label}
            </label>
            <input
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:outline-2 focus:ring-red-500 focus:border-transparent' />
        </div>
    );
};
