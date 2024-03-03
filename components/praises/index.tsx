"use client"

import { addPraise, removePraise } from '@/lib/features/review/reviewSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

const totalPraisesData = ['Adventurous', 'Clean', 'Good listener', 'Honest', 'Humorous', 'Inspiring', 'Kind', 'Knowledgable', 'Non-judgemental', 'Spontaneous', 'Talkative', 'Thoughtful', 'Trustworthy'];

const Praises = () => {
    const dispatch = useAppDispatch()
    const currentPraises: string[] = useAppSelector((state) => state.reviews.praises)

    const options = totalPraisesData.map((praise, id) => (
        <div key={`praise-element-${id}`} onClick={handlePraises} className="px-4 py-3 bg-slate-200 w-fit rounded-full cursor-pointer">
            {praise}
        </div>
    ))
    return (
        <section>
            <h2 className="text-3xl font-bold mt-10">Praise</h2>
            <p className="text-gray-500 mt-2">What traits best describe Trausti?</p>
            <div className="flex flex-wrap gap-1 my-6">
                {options}
            </div>
            <hr />
        </section>
    )
    function handlePraises(e: any) {
        const indexOfCurrentPraise: number = currentPraises.indexOf(e.target.innerText)
        if (indexOfCurrentPraise === -1) {
            dispatch(addPraise(e.target.innerText))
            e.target.style.background = "rgba(154, 230, 180)"
        } else {
            dispatch(removePraise(indexOfCurrentPraise))
            e.target.style.background = "rgb(229 231 235)"
        }
    }
}

export default Praises