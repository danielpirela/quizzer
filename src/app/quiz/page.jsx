'use client'
import { Card } from '../../components/Card'
import { Nav } from '../../components/Nav'

const quiz = () => {
    return (
        <div className='flex justify-center items-center flex-col bg-slate-100 min-h-screen min-w-full'>
            <Nav/>
            <Card/>
        </div>
    )
}

export default quiz
