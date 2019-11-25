import React, {Component, Fragment} from 'react';

import Form from "../Form/Form";

import styles from './EditableImage.module.css';

class EditableImage extends Component {
    state = {
        url: '',
    };

    handleSubmit = (event: any, url: string) => {
        event.preventDefault();
        this.setState({url});
    };

    render() {
        const {url} = this.state;

        return url ? (
            <Fragment>
                <div className={styles.imageContainer}>
                    <img
                        alt="Редактируемое изображение"
                        src={url}
                        className={styles.image}
                    />
                </div>
                <Form onSubmit={this.handleSubmit} />
            </Fragment>
        ) : <Form onSubmit={this.handleSubmit} />
    }
}

export default EditableImage;
