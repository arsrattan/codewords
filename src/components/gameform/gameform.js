import React from 'react';
import styles from './gameform.module.css';

export class GameForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.isAlphabeticOrEmpty = this.isAlphabeticOrEmpty.bind(this);
    }

    isAlphabeticOrEmpty(value) {
        if (/^[a-zA-Z]+$/.test(value) || value === '') {
            return true;
        }
        return false;
    }

    render() {
        return(
            <div className={styles.inputBox}>            
                <input type="text" className={styles.input} maxLength="15" onChange={(e) => {
                    if(this.isAlphabeticOrEmpty(e.target.value)) {
                        this.props.gameIdChanged(e.target.value);
                    }
                }} value={this.props.gameId}/>
            </div>
        )
    }
}