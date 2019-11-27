import React from 'react';

import styles from './App.module.css';
import Header from './components/Header/Header';
import PhotoCarousel from './components/PhotoCarousel/PhotoCarousel';
import EditableImageContainer from './containers/EditableImageContainer';


const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            <PhotoCarousel />
            <EditableImageContainer />
        </div>
    );
}

export default App;
