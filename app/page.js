'use client'
import Link from 'next/link'
import { LogoAnimated } from './components/Icon'

export default function Home() {
    return (

        <div className='flex justify-center items-center space-x-1 flex-col min-h-screen max-h-screen min-w-full bg-zinc-900'>
            <LogoAnimated/>
            <Link href={'/category'} className='bg-zinc-800 py-4 px-6 text-white text-center rounded-lg' >
                Jugar
            </Link>
        </div>

    )
}
