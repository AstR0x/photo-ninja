import React, {Component, Fragment} from 'react';

import Form from "../Form/Form";

import styles from './EditableImage.module.css';
import vintagejs from "vintagejs/dist/vintage";

class EditableImage extends Component<{ filter: string }, {}> {
    state = {
        originalURL: '',
        modifiedURL: '',
    };

    componentWillReceiveProps({filter}) {
        vintagejs(this.state.originalURL, {[filter]: 0.5})
            .then(res => res.getDataURL())
            .then(modifiedURL => this.setState({modifiedURL}));
    };

    handleSubmit = (event: any, URL: string) => {
        event.preventDefault();
        this.setState({originalURL: URL})
    };

    render() {
        const {originalURL, modifiedURL} = this.state;

        return modifiedURL || originalURL ? (
            <Fragment>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        alt="Редактируемое изображение"
                        src={modifiedURL || originalURL}
                    />
                </div>
                <Form onSubmit={this.handleSubmit}/>
            </Fragment>
        ) : <Form onSubmit={this.handleSubmit}/>
    };
}

export default EditableImage;
