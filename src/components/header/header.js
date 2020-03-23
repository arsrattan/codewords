import React from 'react';
import styles from './header.module.css';

export class Header extends React.Component {

    render() {
        return(
            <div className={styles.headerContainer}>
                {this.props.text}
            </div>
        )
    }
}