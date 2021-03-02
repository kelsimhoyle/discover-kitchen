import React, { useEffect } from "react";
import "bulma-carousel/src/sass/index.sass";
import ReviewCard from "./reviewcard";
import Reviews from "../data/reviews.json";


const bulmaCarousel = (() => {
    if (typeof window !== 'undefined') {
        return require('bulma-carousel')
    }
})()


const ReviewCarousel = () => {

    useEffect(() => {


            bulmaCarousel.attach("#review", {
                slidesToScroll: 1,
                slidesToShow: 3,
                pagination: false,
                    });
    

       

    }, [])



    return (
        <div className="section is-medium box has-text-centered	">
        <h3 className="title mb-2">Testimonials</h3>
                <div className="carousel is-clipped	mt-4" data-slides-to-scroll="1" id="review">
                    {Reviews.map(review => (
                        <div className={`item-${review.id}`}>
                            <ReviewCard
                                name={review.name}
                                review={review.review}
                                key={review.id}
                            />
                        </div>
                    ))}
                </div>
        </div>
    );
}


export default ReviewCarousel;
