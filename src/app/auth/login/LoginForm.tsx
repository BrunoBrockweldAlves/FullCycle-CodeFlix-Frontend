'use client';
import React from 'react';
import { InputField } from '../InputField';


export default function LoginForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('submit');
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='flex w-full max-w-md rounded flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-3xl font-bold'>
                    Login
                </h1>
                <p className='text-sm text-gray-500'>
                    New to this app? {''}
                    <a href='/register' className='text-red-500 hover:underline'>
                        Register
                    </a>
                </p>
            </div>

            <InputField label='Email' type='email' placeholder='Enter your email' id='email' />
            <InputField label='Password' type='password' placeholder='Enter your password' id='password' />

            <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-y-0'>
                <button
                    type='submit'
                    className='flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto sm:px-8'>
                    Submit
                </button>
            </div>
        </form>
    );
}
