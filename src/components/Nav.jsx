'use client'
import { BackArrow } from './BackArrow'
import { Menu } from './Icon'

export const Nav = () => {
    return (
        <nav className='flex text-center justify-center items-start p-2 min-w-full h-auto max-h-5 absolute top-0 left-0 bg-none'>
            <BackArrow/>
            <Menu/>
        </nav>
    )
}
