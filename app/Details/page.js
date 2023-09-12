"use client"

import { useRouter } from 'next/navigation'

export default function Details() {
    const router = useRouter()
    return (
        <main className="flex min-h-screen flex-col items-center  ">
            <h1 className='text-4xl font-bold'>This is my Details Page</h1>
            <div
                className="flex flex-col  p-24"
            >
                <button 
                type="button" 
                onClick={() => router.push('/')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Home
                </button>
            </div>
        
        </main>
    )
    }