import { BackArrow } from './BackArrow'

const Nav = ({category}) => {
    return (
        <header className='flex text-center mt-2 justify-center items-center p-2 m-2 bg-zinc-800 rounded-lg'>
            <BackArrow/>
            <h1 className='text-4xl font-extrabold text-white flex-1'>{category}</h1>
        </header>
    )
}

export default Nav
