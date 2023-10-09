import Image from 'next/image'

export const LogoAnimated = () => {
    return (
        <div className='flex justify-center items-center animated'>
            <Image src={'/images/logoligth.png'} width={300} height={300} alt='logo animated of Trivium' priority/>
        </div>
    )
}

export const  Logo = () => {
    return (
        <div className='flex justify-center items-center '>
            <Image src={'/images/logoligth.png'} width={150} height={150} alt='logo of Trivium'/>
        </div>
    )
}
