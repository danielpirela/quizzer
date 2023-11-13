'use client'
import Link from 'next/link'
import { LogoAnimated } from '../components/Icon'
import { Nav } from '../components/Nav'
export default function Home() {
    return (

        <div className='flex items-center space-x-1 flex-col min-h-screen max-h-screen min-w-full bg-slate-100'>
            <Nav/>
            <div className='flex flex-col justify-center items-center mt-20'>
                <LogoAnimated/>
                <p className='font-semibold text-4xl text-indigo-800 p-2'>
                TriviumBlend
                </p>
                <Link href={'/category'} className='bg-zinc-800 py-2 w-32 text-white text-center rounded-lg bg-gradient-to-br from-indigo-700 mt-6' >
                Jugar
                </Link>
            </div>
        </div>

    )
}
