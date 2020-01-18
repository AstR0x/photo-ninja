import React, { Component } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import vintagejs from 'vintagejs';

import PhotoCardContainer from '../../containers/PhotoCardContainer';

import { EFFECTS_NAMES, EFFECTS_SETTINGS } from '../../constants';

import styles from './PhotoCarousel.module.css';

import cardImage from '../../images/card-image.jpg';

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
    effectsURLs: {},
    isLoading: true,
  };

  async componentDidMount() {
    const effectsURLs = {};

    const promises = EFFECTS_NAMES.map(effectName => vintagejs(cardImage, EFFECTS_SETTINGS[effectName]).then(result => {
      effectsURLs[effectName] = result.getDataURL();
    }));

    await Promise.all(promises);

    this.setState({ effectsURLs, isLoading: false });
  }

  render() {
    const { effectsURLs, isLoading } = this.state;

    return !isLoading ? (
      <Carousel
        infinite
        showDots
        swipeable={false}
        draggable={false}
        responsive={responsive}
        transitionDuration={500}
        containerClass={styles.carouselContainer}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass={styles.item}
        centerMode
      >
        {EFFECTS_NAMES.map(effectName => (
          <PhotoCardContainer
            key={effectName}
            URL={effectsURLs[effectName]}
            effect={effectName}
          />
        ))}
      </Carousel>
    ) : null;
  }
}

export default PhotoCarousel;
