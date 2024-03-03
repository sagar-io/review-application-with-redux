"use client"

import { updateSafetyScore } from '@/lib/features/review/reviewSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { Rating } from 'react-simple-star-rating'

const SafetyReview = () => {
    const dispatch = useAppDispatch();
    const currentRating = useAppSelector((state) => state.reviews.safety);
    return (
        <section>
            <h2 className="text-3xl font-bold mt-10">Safety</h2>
            <p className="text-gray-500 mt-2">How safe did you feel with Trausti?</p>
            <Rating
                initialValue={currentRating}
                className='mt-3 mb-6'
                onClick={handleRatingChange}
                SVGclassName='inline-block'
            />
            <hr />
        </section>
    )

    function handleRatingChange(rate: number) {
        dispatch(updateSafetyScore(rate))
    }
}

export default SafetyReview