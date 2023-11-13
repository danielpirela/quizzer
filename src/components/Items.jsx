'use client'
import Image from 'next/image'
import { useDispatch} from 'react-redux'
import { setCategory } from '../app/redux/features/categorySlice'
import Link from 'next/link'


const Items = ({url, title}) => {
    const dispatch = useDispatch()

    const handleClick = async () =>{
        dispatch(setCategory(title))
    }

    return (
        <Link className='rounded-lg bg-white m-2 w-80 ring-2 ring-indigo-700 shadow-xl hover:bg-slate-400 ' onClick={
            () => {
                handleClick()
            }
        } href={'/quiz'}>
            <div className='flex justify-start items-center' href={'/'}>
                <Image  width={90} height={90} src={url} className='rounded-tl-lg rounded-tr-lg' alt="category photo"/>
                <p className='text-gray-800 justify-center hover:rounded-br-lg hover:rounded-bl-lg text-3xl text-center'>{title}</p>
            </div>
        </Link>
    )
}

export default Items
