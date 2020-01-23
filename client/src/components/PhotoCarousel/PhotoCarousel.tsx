import React, { useEffect, useState } from 'react';

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
  mobile: {
    breakpoint: { max: 1080, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const isMobile = window.screen.width <= 1080;

const PhotoCarousel: React.FC = () => {
  const [effectsURLs, setEffectsURLs] = useState<object>({});
  const [isLoading, setLoading] = useState<boolean>(true);

  const setPhotosWithEffects = async () => {
    const promises = EFFECTS_NAMES.map(effectName => vintagejs(cardImage, EFFECTS_SETTINGS[effectName]).then(result => {
      effectsURLs[effectName] = result.getDataURL();
    }));

    await Promise.all(promises);

    setEffectsURLs(effectsURLs);
    setLoading(false);
  };

  useEffect(() => {
    setPhotosWithEffects();
  }, []);

  return !isLoading ? (
    <Carousel
      infinite
      swipeable
      arrows={!isMobile}
      showDots={!isMobile}
      autoPlay={isMobile}
      autoPlaySpeed={3000}
      responsive={responsive}
      transitionDuration={500}
      containerClass={styles.carouselContainer}
      itemClass={styles.item}
      centerMode={!isMobile}
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
};


export default PhotoCarousel;
