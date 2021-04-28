import React, { useEffect } from "react";
import "bulma-carousel/src/sass/index.sass";
import ReviewCard from "./reviewcard";
import { StaticQuery, graphql } from "gatsby";


const bulmaCarousel = (() => {
    if (typeof window !== 'undefined') {
        return require('bulma-carousel')
    }
})()


const ReviewCarousel = () => {

    useEffect(() => {


        bulmaCarousel.attach("#review", {
            slidesToScroll: 2,
            slidesToShow: 2,
            loop: true
        });




    }, [])



    return (

        <StaticQuery
            query={graphql`
            query Reviews {
                allAirtable(filter: {table: {eq: "Reviews"}, data: {status: {eq: "Post"}}}) {
                    nodes {
                      id
                      data {
                        name
                        review
                      }
                    }
                  }
            }
              `}
            render={data => (
                <div className="section is-medium box has-text-centered	">
                    <h3 className="title mb-2">Testimonials</h3>
                    <div className="carousel is-clipped	mt-4" data-slides-to-scroll="1" id="review">
                        {data.allAirtable.nodes.map((review, i) => (
                            <div className={`item-${i + 1}`}>
                                <ReviewCard
                                    name={review.data.name}
                                    review={review.data.review}
                                    key={review.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

        />

    );
}


export default ReviewCarousel;
