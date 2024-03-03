import crossIcon from '@/public/images/cross.svg'
import Image from 'next/image'

const CancelButton = () => {
    return (
        <div>
            <Image src={crossIcon} alt='Close' width={25}/>
        </div>
    )
}

export default CancelButton