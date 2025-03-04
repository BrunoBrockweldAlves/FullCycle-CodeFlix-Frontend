import { InputField } from '@components/InputField'
import React from 'react'



export default function ForgotPasswordForm() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('submit forgotPassword');
        e.preventDefault();
    };
  return (
    <form onSubmit={onSubmit} className='flex w-full max-w-md rounded flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8'>
    
        <div className='flex flex-col items-center space-y-4'>
            <h1 className='text-3xl font-bold'>
               Forgot Password
            </h1>

            <p className='text-sm text-gray-500'>
               Enter your email to recover your password
            </p>
            <InputField label='Email' type='email' placeholder='Enter your email' id='email' />
        </div>
    </form>
)
}
