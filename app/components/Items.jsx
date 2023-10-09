
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/features/categorySlice'

const Items = ({url, title}) => {

    const dispatch = useDispatch()

    const handleClick = (event) =>{
        event.preventDefault()
        dispatch(setCategory(title))
    }

    return (
        <li className='pb-1 rounded-lg bg-zinc-800 m-2 '>
            <Image  width={200} height={250} src={url} className='rounded-tl-lg rounded-tr-lg' alt="category photo"/>
            <button onClick={handleClick} className='text-white justify-center mt-1 hover:rounded-br-lg hover:rounded-bl-lg hover:bg-zinc-700'>{title}</button>
        </li>
    )
}

export default Items
