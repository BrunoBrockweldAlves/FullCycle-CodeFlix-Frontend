'use client';

export default function error(){
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <div className="border border-dashed border-red-500">
            <p className="text-red-500">Something went wrong</p>
        </div>
        </div>
    )
}