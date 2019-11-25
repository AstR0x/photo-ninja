import React from 'react';

import styles from './App.module.css';
import Header from './Components/Header/Header';
import PhotoCarousel from './Components/PhotoCarousel/PhotoCarousel';
import EditableImage from './Components/EditableImage/EditableImage';


const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            <PhotoCarousel />
            <EditableImage />
        </div>
    );
}

export default App;
