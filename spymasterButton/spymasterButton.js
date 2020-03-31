import React from 'react';
import styles from './spymasterButton.module.css';
import styleVars from '../../styles/globalStyles.json';

export class SpymasterButton extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.buttonClickedColorChange = this.buttonClickedColorChange.bind(this);
    }

    buttonClickedColorChange() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    getBackgroundColor() {
        return this.state.clicked === true ? styleVars.spymasterButtonSelectedColor : styleVars.spymasterButtonColor;
    }

    getTextColor() {
        return this.state.clicked === true ? styleVars.spymasterButtonSelectedTextColor : styleVars.spymasterButtonTextColor;
    }

    render() {
        return(
            <div className={styles.button} style={{backgroundColor: this.getBackgroundColor(), color: this.getTextColor()}} onClick={() => { this.props.onClick(); this.buttonClickedColorChange(); }}>
                <div className={styles.buttonText}>
                    SpyMaster
                </div>
            </div>
        )
    }
}