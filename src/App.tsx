import React from 'react';

import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Photos from './components/Photos/Photos';
import Information from './components/Information/Information';
import PhotoCarousel from './components/PhotoCarousel/PhotoCarousel';
import EditableImageContainer from './containers/EditableImageContainer';


const App: React.FC = () => (
  <div className={styles.app}>
    <Header />
    <Photos />
    <Information />
    <PhotoCarousel />
    <EditableImageContainer />
    <Footer />
  </div>
);

export default App;
