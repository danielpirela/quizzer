'use client'
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

function Register () {

    const [isCreated, setIsCreated] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {elements} = e.currentTarget

        const name = elements.namedItem('nombre').value
        const phone = elements.namedItem('telefono').value
        const email = elements.namedItem('email').value
        const password = elements.namedItem('password').value

        console.log(name,phone, email, password)

        const res = await axios.post('/api/user', {
            phone: Number(phone),
            email: email,
            password: password,
            name: name,
        })

        if (res.data.error) return setIsCreated(false)
        setIsCreated(true)
    }

    useEffect(() =>{
        if (isCreated) redirect('/login')
    },[isCreated])

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-slate-100 min-w-full" >
            <div className="w-auto p-6 bg-white rounded-md shadow-xl ring-2 ring-indigo-600 lg:max-w-xl m-4">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Registrar
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="nombre"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Nombre
                        </label>
                        <input
                            name='nombre'
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            name='email'
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            name='password'
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="telefono"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Telefono
                        </label>
                        <input
                            name='telefono'
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <input type="submit" value='Registrar' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"/>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {' '}
                    Ya tienes una cuenta?{' '}
                    <a
                        href="/login"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Iniciar sesion
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Register
