'use client';
import React from 'react'
import { InputField } from './InputField';

type AuthFormProps = {
    formType: 'login' | 'register'
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthForm:React.FC<AuthFormProps> = ({formType, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className='flex w-full max-w-md rounded flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8'>
        <div className='flex flex-col items-center space-y-4'>
            <h1 className='text-3xl font-bold'>
               {formType === 'login'?
                'Login' :
                'Register'}
            </h1>

            <p className='text-sm text-gray-500'>
               {formType === 'login'?
                'New to this app?' : 
                'Already have an account?'}{' '}

                <a href={formType === 'login'? 
                    '/auth/register' :
                    '/auth/login'} 
                     className='text-red-500 hover:underline'>

                   {formType === 'login'?
                    'Register' :
                    'Login'}
                </a>
            </p>
        </div>    
        <div>
            <InputField label='Email' type='email' placeholder='Enter your email' id='email' />
            <InputField label='Password' type='password' placeholder='Enter your password' id='password' />
            
            {formType === 'register' && (<InputField label='Confirm Password' type='password' placeholder='Confirm your password' id='confirmingPassword' />)}            
        </div>

        <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-y-0'>
                <button
                    type='submit'
                    className='flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto sm:px-8'>
                    {formType === 'login'?
                    'Login' :
                    'Register'}
                </button>
            </div>
    </form>
  )
}
