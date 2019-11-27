import React, {Component} from 'react';

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import PhotoCardContainer from "../../containers/PhotoCardContainer";

import styles from './PhotoCarousel.module.css';
import vintagejs from "vintagejs/dist/vintage";

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

class PhotoCarousel extends Component {

    state = {
        filters: ['original', 'contrast', 'brightness', 'saturation', 'gray', 'sepia', 'vignette', 'lighten'],
        // filtersURLs: {},
    };

    //
    // async componentDidMount() {
    //
    //        const url = await vintagejs('./../../images/card-image.png', {contrast: 0.5});
    //
    //
    //     console.log(url);
    //
    //
    //
    //     console.log(this.state);
    // }

    render() {
        const {filters} = this.state;

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
                {filters.map(filter => <PhotoCardContainer mode={filter}/>)}
            </Carousel>
        );
    }

}

export default PhotoCarousel;
