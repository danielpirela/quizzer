'use client'
import axios from 'axios'
import { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Quiz } from './Quiz'

export const Card = ()  => {

    const category = useSelector(state => state.categoryState.title)
    const [preguntas, setPreguntas] = useState([])


    useEffect(() => {
        async function aux (){
            const res = await axios.post('/api/quiz' , {
                category : category
            })
            setPreguntas(res.data)
        }
        aux()
    },[])

    return (
        <Quiz preguntas={preguntas}/>
    )
}
