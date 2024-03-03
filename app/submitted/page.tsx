import Image from "next/image"
import loveIcon from '@/public/images/love.svg'

const Submitted = () => (
    <section className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg mb-3">Thanks for submitting the form !</p>
        <Image src={loveIcon} alt="" width={40} />
    </section>
)

export default Submitted