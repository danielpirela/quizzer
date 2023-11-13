import Link from 'next/link'
const notFound = () => {
    return (
        <div className='flex items-center justify-center bg-slate-100 min-h-screen min-w-full'>
            <div className='flex flex-col justify-center items-center'>
                <div className="w-full h-full pb-5">
                    <iframe src="https://giphy.com/embed/OZeWzZalgU5XNyHAqh" width="300px" height="300px" className="absolurt rounded-lg" frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
                <Link href={'/'} className='bg-slate-100 ring-2 ring-indigo-700 rounded-xl px-4 py-2 text-black font-bold'>
          Ir al home
                </Link>
            </div>
        </div>
    )
}

export default notFound
