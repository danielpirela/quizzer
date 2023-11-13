'use client'
import Items from './Items'
import { dictionary } from '../utils/dictionary'
import {Nav}  from './Nav'
import { useDispatch} from 'react-redux'
import { setCategory } from '../app/redux/features/categorySlice'
import { useEffect} from 'react'

const Category = () => {
    const { programacion,
        cultura,
        peliculas,
        juegos,
        ciencia,
        musica
    } = dictionary

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCategory('Ninguna Categoria'))
    },[dispatch])
    return (
        <div className='flex flex-col min-h-screen w-full bg-slate-100 m-0'>
            <Nav/>
            <main className='flex justify-center items-center bg-slate-100 min-h-screen m-0 mt-20'>
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
