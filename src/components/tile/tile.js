import React from 'react';
import styles from './tile.module.css';
import styleVars from '../../styles/globalStyles.json';

export class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lastColor: styleVars.neutralCardColor,
            colorShown: styleVars.neutralCardColor
        }
        this.toggleColor = this.toggleColor.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.spymasterSelected !== this.props.spymasterSelected) {
            if (newProps.spymasterSelected === true) {
                this.setState({
                    lastColor: styleVars.neutralCardColor,
                    colorShown: this.props.color
                });
            } else {
                this.setState({
                    lastColor: this.props.color,
                    colorShown: styleVars.neutralCardColor
                });
            }
        }
    }

    toggleColor() {
        if(this.props.spymasterSelected) {
            if(this.state.colorShown === styleVars.neutralCardColor) {
                this.setState({
                    lastColor: styleVars.neutralCardColor,
                    colorShown: this.props.color
                }, this.sendColorChangeToBoard);
            } else if (this.state.colorShown === styleVars.greenCardColor) {
                this.setState({
                    lastColor: styleVars.greenCardColor,
                    colorShown: styleVars.neutralCardColor
                }, this.sendColorChangeToBoard);
            } else {
                this.setState({
                    lastColor: this.props.color,
                    colorShown: styleVars.greenCardColor
                }, this.sendColorChangeToBoard);
            }
        } else {
            if(this.state.colorShown === styleVars.neutralCardColor) {
                this.setState({
                    lastColor: styleVars.neutralCardColor,
                    colorShown: this.props.color
                }, this.sendColorChangeToBoard);
            } else {
                this.setState({
                    lastColor: this.props.color,
                    colorShown: styleVars.neutralCardColor
                }, this.sendColorChangeToBoard);
            }
        }
    }

    sendColorChangeToBoard() {
        if (!this.props.spymasterSelected) {
            this.props.trackClick(this.state.lastColor, this.state.colorShown);
        }
    }

    render() {
        return(
            <div className={styles.tileContainer}>
                <div className={styles.tile} style={{backgroundColor: this.state.colorShown}} onClick={() => this.toggleColor()}>
                    <div className={styles.word}>
                        <span>{this.props.word}</span>
                    </div>
                </div>
            </div>
        )
    }
}