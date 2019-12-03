import React, { Component } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import vintagejs from 'vintagejs';

import PhotoCardContainer from '../../containers/PhotoCardContainer';

import styles from './PhotoCarousel.module.css';

import cardImage from '../../images/card-image.png';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

class PhotoCarousel extends Component {
  state = {
    filters: ['original', 'contrast', 'brightness', 'saturation', 'gray', 'sepia', 'vignette', 'lighten'],
    filtersURLs: {},
    isLoading: true,
  };

  async componentDidMount() {
    const { filters } = this.state;
    const filtersURLs = {};

    const promises = filters.map(filter => vintagejs(cardImage, { [filter]: 0.4 }).then(result => {
      filtersURLs[filter] = result.getDataURL();
    }));

    await Promise.all(promises);

    this.setState({ filtersURLs, isLoading: false })
  }

  render() {
    const { filtersURLs, filters, isLoading } = this.state;

    return !isLoading ? (
      <Carousel
        infinite
        showDots
        swipeable={false}
        draggable={false}
        responsive={responsive}
        autoPlaySpeed={1000}
        transitionDuration={500}
        containerClass={styles.carouselContainer}
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {filters.map(filter => (
          <PhotoCardContainer
            key={filter}
            URL={filtersURLs[filter]}
            filter={filter}
          />
        ))}
      </Carousel>
    ) : null;
  }
}

export default PhotoCarousel;
