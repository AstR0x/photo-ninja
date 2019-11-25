import React from 'react';

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import PhotoCard from "../PhotoCard/PhotoCard";

import styles from './PhotoCarousel.module.css';

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        slidesToSlide: 1,
    },
};

const PhotoCarousel: React.FC = () => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass={styles.carouselContainer}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            <PhotoCard/>
            <PhotoCard mode="contrast"/>
            <PhotoCard mode="brightness"/>
            <PhotoCard mode="saturate"/>
            <PhotoCard mode="grayscale"/>
            <PhotoCard mode="sepia"/>
            <PhotoCard mode="invert"/>
        </Carousel>
    );
}

export default PhotoCarousel;
