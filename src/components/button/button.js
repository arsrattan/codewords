import React from 'react';
import styles from './button.module.css';

export class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            hovering: false
        }
        this.buttonClickedColorChange = this.buttonClickedColorChange.bind(this);
        this.buttonHoverColorChange = this.buttonHoverColorChange.bind(this);
    }

    buttonClickedColorChange() {
        console.log(`Clicked b4: ${this.state.clicked}`);
        this.setState({
            clicked: !this.state.clicked
        })
        console.log(`Clicked now: ${this.state.clicked}`);
    }

    buttonHoverColorChange() {
        this.setState({
            hovering: !this.state.hovering
        })
    }

    getBackgroundColor() {
        return this.state.clicked === true ? '#4f7567' : this.state.hovering ? 'grey' : 'white';
    }

    getTextColor() {
        return (this.state.clicked === true || this.state.hovering === true) ? 'white' : 'black';
    }

    render() {
        return(
            <div>
                <button className={styles.button} style={{backgroundColor: this.getBackgroundColor(), color: this.getTextColor()}} onClick={() => { this.props.onClick(); this.buttonClickedColorChange(); }} onMouseOver={() => this.buttonHoverColorChange()} onMouseLeave={() => this.buttonHoverColorChange()}>
                    <div className={styles.buttonText}>
                        {this.props.text}
                    </div>
                </button>
            </div>
        )
    }
}