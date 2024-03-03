"use client"

import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { updateIsRecommended } from "@/lib/features/review/reviewSlice";


const RecommendationReview = () => {
    const dispatch = useAppDispatch();
    const isRecommended = useAppSelector((state) => state.reviews.isRecommended);

    const likeStyles = {
        color: (isRecommended) ? 'rgba(154, 255, 180)' : 'rgb(229, 231, 235)'
    }
    const dislikeStyles = {
        color: (!isRecommended) ? 'rgba(154, 255, 180)' : 'rgb(229, 231, 235)'
    }

    return (
        <section>
            <h2 className="text-3xl font-bold mt-10">Would you recommend Trausti?</h2>
            <p className="text-gray-500 mt-2">Your opinion won&#39;t be posted publicly.</p>
            <div className="flex gap-8 my-5 mb-6 mx-4">
                <div className="flex items-center gap-4" onClick={handleSetNotRecommended}>
                    <span><BiSolidDislike style={dislikeStyles} className="scale-[3] mr-2" /></span>
                    <p style={dislikeStyles}>No</p>
                </div>
                <div className="flex items-center gap-4" onClick={handleSetRecommended}>
                    <span><BiSolidLike style={likeStyles} className="scale-[3] mr-2" /></span>
                    <p style={likeStyles}>Yes</p>
                </div>
            </div>
            <hr />
        </section>
    )
    function handleSetRecommended() {
        dispatch(updateIsRecommended(true))
    }
    function handleSetNotRecommended() {
        dispatch(updateIsRecommended(false))
    }
}

export default RecommendationReview