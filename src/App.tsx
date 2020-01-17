import React from 'react';

import styles from './App.module.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Photos from './component/Photos/Photos';
import Information from './component/Information/Information';
import EffectsDescription from './component/EffectsDescriptions/EffectsDescription';
import PhotoCarousel from './component/PhotoCarousel/PhotoCarousel';
import EditableImageContainer from './containers/EditableImageContainer';

const App: React.FC = () => (
  <div className={styles.app}>
    <Header />
    <Photos />
    <Information />
    <EffectsDescription />
    <PhotoCarousel />
    <EditableImageContainer />
    <Footer />
  </div>
);

export default App;
