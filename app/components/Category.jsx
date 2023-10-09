'use client'
import Items from './Items'
import { dictionary } from '../utils/dictionary'
import Nav  from './Nav'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/features/categorySlice'
import { useEffect} from 'react'


const Category = () => {
    const { programacion,
        cultura,
        peliculas,
        juegos,
        ciencia,
        musica
    } = dictionary

    const category = useSelector(state => state.categoryState.title)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCategory('Ninguna Categoria'))
    },[dispatch])
    return (
        <div className='flex flex-col min-h-screen w-full bg-zinc-900 m-0'>
            <Nav category={category}/>
            <main className='flex justify-center items-center bg-zinc-900 min-h-screen m-0'>
                <ul className='flex flex-col justify-center items-center min-h-screen min-w-full m-0 '>
                    <Items url={programacion.url} title={programacion.title}/>
                    <Items url={cultura.url} title={cultura.title}/>
                    <Items url={peliculas.url} title={peliculas.title}/>
                    <Items url={juegos.url} title={juegos.title}/>
                    <Items url={musica.url} title={musica.title}/>
                    <Items url={ciencia.url} title={ciencia.title}/>
                </ul>
            </main>
        </div>
    )
}

export default Category
