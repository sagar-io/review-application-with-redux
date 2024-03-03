import CancelButton from "@/components/cancelButton"
import Comment from "@/components/comment";
import CommunicationReview from "@/components/communicationReview";
import Praises from "@/components/praises";
import RecommendationReview from "@/components/recommendationReview";
import SafetyReview from "@/components/safetyReview";
import Link from 'next/link'

export default function Review() {
  return (
    <main className="m-4">
      <CancelButton />
      <h1 className="text-4xl font-bold mt-4">Leave a review</h1>
      <SafetyReview />
      <CommunicationReview />
      <RecommendationReview />
      <Praises />
      <Comment />
      <Link href="/submitted">
        <button className="bg-green-300 uppercase my-5 w-full py-3 rounded-md font-bold">Publish Review</button>
      </Link>
    </main>
  );
}
