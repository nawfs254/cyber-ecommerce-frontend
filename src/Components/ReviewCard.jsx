import ReactStars from "react-rating-stars-component";

const ReviewCard = ({review}) => {
    console.log(review)
    const {reviewerName, rating, date, comment} = review
    return (
        <div className="flex flex-col gap-0 bg-gray-100 my-3 p-3 rounded-md">
            <h3 className="text-xl font-bold">{reviewerName}</h3>
            <ReactStars activeColor="#FFB547" value={rating} size={20}></ReactStars>
            <p className="text-sm opacity-80">{date}</p>
            <p className="font-medium">{comment}</p>
        </div>
    )
}

export default ReviewCard