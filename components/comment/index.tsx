"use client"

import { updateComments } from '@/lib/features/review/reviewSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks'


const Comment = () => {
    const dispatch = useAppDispatch();
    const currentComment = useAppSelector((state) => { state.reviews.comments })

    return (
        <section>
            <h2 className="text-3xl font-bold mt-10">Care to share more?</h2>
            <p className="text-gray-500 mt-2">How was your overall experience? What&#39;s that one thing you won&#39;t forget Trausti for?</p>
            <textarea
                className="mt-3 mb-6 w-full p-2 border"
                placeholder="Come on, you know the drill."
                rows={8}
                onChange={handleComment}
            />
            <hr />
        </section>
    )
    function handleComment(e: any) {
        const comment = e.target.value
        dispatch(updateComments(comment))
    }
}

export default Comment