import Image from 'next/image'

export const BackArrow = () => {
    return (
        <button className='flex justify-start items-center' onClick={()=>        {history.back()}}>
            <Image src={'/images/backArrow.svg'} width={19} height={36} alt='back arrow icon'/>
        </button>
    )
}
