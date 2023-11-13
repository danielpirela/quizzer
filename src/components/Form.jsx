'use client'
import { useForm } from 'react-hook-form'

export const Form = () => {
    const {register, handleSubmit} = useForm()

    return (
        <form className="mt-6" onSubmit={handleSubmit((data)=>{
            console.log(data)
        })}>
            <input
                {...register('email')}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <input
                {...register('password')}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <input type="submit" value={'Login'} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"/>
        </form>
    )
}
