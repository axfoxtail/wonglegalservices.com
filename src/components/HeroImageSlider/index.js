import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './hero-image-slider.scss';

const slide1 = require('../../assets/images/home-slider-image-1.jpg');
const slide2 = require('../../assets/images/about-image-1.jpg');
const logo = require('../../assets/images/graphic-home-slider.png');

const slides = [
    { img: slide1, logo: logo, titlePre: 'The firm is renowned for its service to clients in Hong Kong and internationally', title: 'The best law team for your money', description: 'We act as Security Trustee on a variety of transactions, both in the public sphere and on niche private deals involving alternative finance providers. '},
    { img: slide2, logo: logo, titlePre: 'Unshakeable Commitment To Justice', title: 'Distinguished by our commitment to excellence', description: 'Wong & Co Legal Services is a full-service litigation and dispute resolution law firm, built on the many years of experience of its founding solicitor partners'},
    { img: slide1, logo: logo, titlePre: 'The firm is renowned for its service to clients in Hong Kong and internationally', title: 'The best law team for your money', description: 'We act as Security Trustee on a variety of transactions, both in the public sphere and on niche private deals involving alternative finance providers. '},
    { img: slide2, logo: logo, titlePre: 'Unshakeable Commitment To Justice', title: 'Distinguished by our commitment to excellence', description: 'Wong & Co Legal Services is a full-service litigation and dispute resolution law firm, built on the many years of experience of its founding solicitor partners'}
];

export default function HeroImageSlider() {
    return (
        <Slider 
            autoplay="2000" 
        >
            {slides.map((slide, index) => 
                <div
                    key={index}
                    className="slider-content"
                    style={{ backgroundImage: `url('${slide.img}')` }}
                >
                    <div className="slide-captions text-white">
                        <img src={slide.logo} className="slide-top-logo" alt="slide logo" />
                        <h4 className="slide-title-pre">{slide.titlePre}</h4>
                        <h2 className="slide-title">{slide.title}</h2>
                        <p className="slide-description">{slide.description}</p>
                    </div>
                </div>)}
        </Slider>
    );
}