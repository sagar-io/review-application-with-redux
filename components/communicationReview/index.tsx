"use client"

import { Rating } from "react-simple-star-rating"
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { updateCommunicationScore } from "@/lib/features/review/reviewSlice";

const CommunicationReview = () => {
    const dispatch = useAppDispatch();
    const currentRating = useAppSelector((state) => state.reviews.communication);

    return (
        <section>
            <h2 className="text-3xl font-bold mt-10">Communication</h2>
            <p className="text-gray-500 mt-2">How easy was to communicate with Trausti?</p>
            <Rating
                className='mt-3 mb-6'
                onClick={handleCommunicationScoreChange}
                SVGclassName='inline-block'
                initialValue={currentRating}
            />
            <hr />
        </section>
    )
    function handleCommunicationScoreChange(rate: number) {
        dispatch(updateCommunicationScore(rate));
    }
}

export default CommunicationReview