import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './loadingInfo.module.css';
import styleDefinitions from '../../styles/globalStyles.json';

const LoadingInfo = props => {
    return(
        <div className={styles.loadingInfo}>
            <h4 className={styles.introText}>{props.introText}</h4>
            <h1 className={styles.headingText}>{props.headingText}</h1>
            <CircularProgress id={styles.appLoadingSpinner} size={styleDefinitions.spinnerSize} />
        </div>
    )
}

export default React.memo(LoadingInfo);