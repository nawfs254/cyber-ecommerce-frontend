import { Link, useLoaderData, useParams } from "react-router"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import ReactStars from "react-rating-stars-component";
import ProgressBar from "@ramonak/react-progress-bar";
import SectionHead from "../Components/SectionHead";
import ReviewCard from "../Components/ReviewCard";

const ProductDetail = () => {
    const allProducts = useLoaderData()
    let excellentRating = 0;
    let goodRating = 0;
    let avgRating = 0;
    let belowAvgRating = 0;
    let poorRating = 0;

    const id = useParams()
    const pageId = id.id


    const singleProduct = allProducts.find(singleProduct => singleProduct.id === parseInt(pageId));

    console.log(singleProduct)



    // const singleProduct = allProducts[7]

    const { title, price, discountPercentage, warrantyInformation, shippingInformation, returnPolicy, rating, description, reviews } = singleProduct

    const productImages = singleProduct.images
    const originalPrice = price + (price * discountPercentage) / 100;
    const reviewsCount = reviews.length
    const starRating = Math.round(rating)

    reviews.map(review => {
        if (review.rating === 5) {
            excellentRating += 1
        }
        else if (review.rating === 4) {
            goodRating += 1
        }
        if (review.rating === 3) {
            avgRating += 1
        }
        if (review.rating === 2) {
            belowAvgRating += 1
        }
        if (review.rating === 1) {
            poorRating += 1
        }

    })

    const excellentPer = (excellentRating / 3) * 100
    const goodPer = (goodRating / 3) * 100
    const avgPer = (avgRating / 3) * 100
    const belowAvgPer = (belowAvgRating / 3) * 100
    const poorPer = (poorRating / 3) * 100

    // console.log(excellentPer, goodPer, avgPer, belowAvgPer, poorPer)

    const saveToLocalStorage = (key, value) => {
        const existingItem = JSON.parse(localStorage.getItem(key)) || []
        existingItem.push(value)
        localStorage.setItem(key, JSON.stringify(existingItem))
    }

    const savedToCart = () => {
        saveToLocalStorage("product", singleProduct);
        console.log("clicked")
    }

    return (
        <>
            <div className="breadcrumbs text-sm mx-4 lg:mx-36 my-10">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li>{title}</li>
                </ul>
            </div>
            <div className="mx-4 lg:mx-36 my-10">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2">
                        <Carousel showStatus={0} showArrows={0} showIndicators={0}>
                            {

                                productImages.map((img, index) => {
                                    // console.log(img)

                                    return <div key={index} className="h-96 w-96">
                                        <img src={img} className="w-full" />
                                        <div className="flex justify-center items-center h-96 w-96 bg-contain bg-center bg-no-repeat"
                                            style={{ backgroundImage: `url(${img || ''})` }}></div>
                                    </div>
                                })
                            }
                        </Carousel>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-semibold">{title}</h1>
                        <div className="flex gap-3 items-center">
                            <p className="font-medium text-2xl">${price}</p>
                            <p className="line-through">${originalPrice}</p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4  gap-5 my-5">
                            <div className="bg-gray-200 p-5 flex items-center justify-center text-center font-medium rounded-sm">{warrantyInformation}</div>
                            <div className="bg-gray-200 p-5 flex items-center justify-center text-center font-medium rounded-sm">{shippingInformation}</div>
                            <div className="bg-gray-200 p-5 flex items-center justify-center text-center font-medium rounded-sm">{returnPolicy}</div>
                            <div className="bg-gray-200 p-5 flex items-center justify-center text-center font-medium rounded-sm gap-1">{rating} <ReactStars activeColor="#FFB547" count={1} value={1} size={16}></ReactStars></div>
                        </div>

                        <div>{description}</div>

                        <div className="flex gap-3 my-5">
                            <button onClick={() => savedToCart()} className="font-medium text-base md:text-sm lg:text-base border-2 px-10 md:px-14 py-4 rounded-md border-black bg-white hover:bg-black hover:text-white transition">Add to cart</button>
                            <button className="font-medium text-base md:text-sm lg:text-base border-2 px-10 md:px-14 py-4 rounded-md border-black bg-black text-white hover:bg-white hover:text-black transition">Buy Now</button>
                        </div>
                    </div>

                </div>

                <div className="my-10">
                    <SectionHead title="Reviews"></SectionHead>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-center justify-center my-5">
                    <div className="flex flex-col items-center justify-center bg-gray-200 p-5 rounded-lg w-full lg:w-fit">
                        <h2 className="text-3xl font-medium">{rating}</h2>
                        <p>of {reviewsCount} reviews</p>
                        <ReactStars activeColor="#FFB547" value={starRating} size={30}></ReactStars>
                    </div>

                    <div>
                        <div>
                            <div className="flex items-center gap-3">
                                <td className="text-xs md:text-base grow">Excellent</td>
                                <td className="w-36 md:w-[500px]"><ProgressBar bgColor="#FFB547" completed={excellentPer} customLabel={" "} height="4px"></ProgressBar></td>
                                <td className="text-sm px-2 md:px-5 font-medium">{excellentRating}</td>
                            </div>
                            <div className="flex items-center gap-3">
                                <td className="text-xs md:text-base grow">Good</td>
                                <td className="w-36 md:w-[500px]"><ProgressBar bgColor="#FFB547" completed={goodPer} customLabel={" "} height="4px"></ProgressBar></td>
                                <td className="text-sm px-2 md:px-5 font-medium">{goodRating}</td>
                            </div>
                            <div className="flex items-center gap-3">
                                <td className="text-xs md:text-base grow">Average</td>
                                <td className="w-36 md:w-[500px]"><ProgressBar bgColor="#FFB547" completed={avgPer} customLabel={" "} height="4px"></ProgressBar></td>
                                <td className="text-sm px-2 md:px-5 font-medium">{avgRating}</td>
                            </div>
                            <div className="flex items-center gap-3">
                                <td className="text-xs md:text-base grow">Below Average</td>
                                <td className="w-36 md:w-[500px]"><ProgressBar bgColor="#FFB547" completed={belowAvgPer} customLabel={" "} height="4px"></ProgressBar></td>
                                <td className="text-sm px-2 md:px-5 font-medium">{belowAvgRating}</td>
                            </div>
                            <div className="flex items-center gap-3">
                                <td className="text-xs md:text-base grow">Poor</td>
                                <td className="w-36 md:w-[500px]"><ProgressBar bgColor="#FFB547" completed={poorPer} customLabel={" "} height="4px"></ProgressBar></td>
                                <td className="text-sm px-2 md:px-5 font-medium">{poorRating}</td>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="reviews">
                    {
                        reviews.map((review, index) => {
                            // console.log(review)
                            return <ReviewCard key={index} review={review}></ReviewCard>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductDetail