import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const LogoAnimated = () => {
    return (
        <div className='flex justify-center items-center animated'>
            <Image src={'/images/logoDark.png'} width={250} height={250} alt='logo animated of Trivium' priority/>
        </div>
    )
}

export const  Logo = () => {
    return (
        <div className='flex justify-center items-center '>
            <Image src={'/images/logoligth.png'} width={150} height={150} alt='logo of Trivium'/>
        </div>
    )
}

export const  Menu = () => {

    const [isView, setIsView] = useState(false)

    const handleView = () => {
        setIsView(!isView)
        console.log(isView)
    }

    return (
        <div>

            <button className='flex justify-end items-center p-2'  onClick={handleView}>
                <Image src={'/images/menu.svg'} width={34} height={30} alt='menu icon'/>
            </button>
            {
                isView && (
                    <ul className='flex text-black flex-col w-auto h-auto shadow-xl ring-2 ring-indigo-700 rounded-xl p-2 absolute right-0 top-0 mt-16 mr-2 bg-slate-100'>
                        <li >
                            <Link href="/"  className='hover:text-indigo-600'>
                        Home
                            </Link>
                        </li>
                        <li >
                            <Link href="/register" className='hover:text-indigo-600'>
                        Registrar
                            </Link>
                        </li>
                        <li >
                            <Link href="/login" className='hover:text-indigo-600'>
                        Iniciar sesion
                            </Link>
                        </li>
                        <li >
                            <Link href="/category" className='hover:text-indigo-600'>
                        Categoria
                            </Link>
                        </li>
                    </ul>
                )
            }
        </div>
    )
}
