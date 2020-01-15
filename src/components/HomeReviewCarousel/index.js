import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function HomeReviewCarousel() {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            deviceType={"desktop"}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div className="bg-white m-3 p-4">
                <div className="avatar-wrapper">
                    <img src={require('../../assets/images/testimonial-1.png')} className="review-avatar m-4" alt="avatar" />
                </div>
                <h3>Best Lawyers</h3>
                <div className="rate-star-wrapper">
                    <Rater total={5} rating={0} interactive={false} />
                </div>
                <p>"My personal Lawyer is an excellent attorney who really goes above and beyond for his client, I'd trust him with anything and do not hesitate to call him. He has represented and stuck by me now for the past 4 years"</p>
                <h6>Hans Leibowitz</h6>
            </div>
            <div className="bg-white m-3 p-4">
                <div className="avatar-wrapper">
                    <img src={require('../../assets/images/testimonial-2.png')} className="review-avatar m-4" alt="avatar" />
                </div>
                <h3>Feeling Safe</h3>
                <div className="rate-star-wrapper">
                    <Rater total={5} rating={0} interactive={false} />
                </div>
                <p>"Wong & Co Legal Services have represented my company twice in the last year. Once in a civil litigation and once in a criminal defense capacity. BOTH results exceeded my expectations"</p>
                <h6>James Baker</h6>
            </div>
            <div className="bg-white m-3 p-4">
                <div className="avatar-wrapper">
                    <img src={require('../../assets/images/testimonial-3.png')} className="review-avatar m-4" alt="avatar" />
                </div>
                <h3>Great Practice</h3>
                <div className="rate-star-wrapper">
                    <Rater total={5} rating={0} interactive={false} />
                </div>
                <p>"I almost lost a lifetime of earnings after trusting the wrong person. Wong Legal Services guided me through the arbitration process and a mediation, always fully prepared and committed to my case"</p>
                <h6>Dawn Bradley</h6>
            </div>
            <div className="bg-white m-3 p-4">
                <div className="avatar-wrapper">
                    <img src={require('../../assets/images/testimonial-1-1.png')} className="review-avatar m-4" alt="avatar" />
                </div>
                <h3>Best Support</h3>
                <div className="rate-star-wrapper">
                    <Rater total={5} rating={0} interactive={false} />
                </div>
                <p>"My in-laws lost their retirement funds to a dishonest broker. Wong Legal Services aggressively pursued their losses until he got their money back.”</p>
                <h6>Greg Foster</h6>
            </div>
        </Carousel>
    );
}
