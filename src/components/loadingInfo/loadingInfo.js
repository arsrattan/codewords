import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './loadingInfo.module.css';

export class LoadingInfo extends React.Component {

    render() {
        return(
            <div className={styles.loadingInfo}>
              <h4 className={styles.introText}>{this.props.introText}</h4>
              <h1 className={styles.headingText}>{this.props.headingText}</h1>
              <CircularProgress id={styles.appLoadingSpinner} size="15%" />
            </div>
        )
    }
}