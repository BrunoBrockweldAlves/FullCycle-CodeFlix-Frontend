import { notFound } from 'next/navigation';
import React from 'react';
import { getUserById } from 'src/app/lib/settings';

async function User({params}:{params:{id:string}}){
    const {
        name, id , username, website
    } = await getUserById(params.id);

    if (!name){
        notFound();
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">User {params.id} Page</h1>
        <div className=' border borrder-dashed border-red-500 p-4'>
        <p>Name: {name}</p>
        <p>Id: {id}</p>
        <p>Username: {username}</p>
        <p>Website: {website}</p>
        </div>
        </div>
    )
}

export default User
