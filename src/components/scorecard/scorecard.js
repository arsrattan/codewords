import React from 'react';
import styles from './scorecard.module.css';

export class Scorecard extends React.PureComponent {

    render() {
        return(
            <div className={styles.scorecard} style={{backgroundColor: this.props.color}}>
                <div className={styles.scorecardText}>
                    {this.props.tilesRemaining}
                </div>
            </div>
        )
    }
}