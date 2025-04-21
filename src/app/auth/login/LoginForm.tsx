'use client';
import React, { FormEvent, useState } from 'react';
import { AuthForm } from '@components/AuthForm';
import { useRouter } from 'next/navigation';

type ServerError = {
    message: string;
}

export default function LoginForm() {
const [errors, setErrors] = useState<string[]>([]);


const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch('/auth/login/api', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({email, password}),
            });
            console.log(response);

            if(response.ok){
                router.push('/');
                return;
            }

            const payload: ServerError[] = await response.json();
            setErrors(payload.map((error) => error.message));
        } catch (error:any) {
            console.log(error.message)
            setErrors(['An unknown error occurred: ', error]);
        }
    };

    return (
        <AuthForm formType={'login'} onSubmit={function (e: React.FormEvent<HTMLFormElement>): void {
            handleSubmit
          } } />
    );
}
