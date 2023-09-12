'use client'
 
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <h1 className='text-4xl font-bold'>This is my Home Page</h1>
      <div
        className="flex flex-col  p-24"
      >
        <button 
          type="button" 
          onClick={() => router.push('/Details')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Details
        </button>
      </div>
      
    </main>
  )
}
