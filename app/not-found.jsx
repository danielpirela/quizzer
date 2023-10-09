import Link from 'next/link'

const notFound = () => {
    return (
        <div className='flex items-center justify-center bg-zinc-900 min-h-screen min-w-full'>
            <div className='flex flex-col justify-center items-center'>
                <div className="w-full h-full pb-5">
                    <iframe src="https://giphy.com/embed/OZeWzZalgU5XNyHAqh" width="300px" height="300px" className="absolurt rounded-lg" frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
                <Link href={'/'} className='bg-zinc-800 rounded-xl px-4 py-2'>
          Ir al home
                </Link>
            </div>
        </div>
    )
}

export default notFound
