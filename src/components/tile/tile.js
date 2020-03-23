import React from 'react';
import styles from './tile.module.css';

export class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lastColor: undefined,
            colorShown: 'white'
        }
        this.toggleColor = this.toggleColor.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.spymasterSelected !== this.props.spymasterSelected) {
            if (newProps.spymasterSelected === true) {
                this.setState({
                    lastColor: 'white',
                    colorShown: this.props.color
                });
            } else {
                this.setState({
                    lastColor: this.props.color,
                    colorShown: 'white'
                });
            }
        }
    }

    toggleColor() {
        if(this.props.spymasterSelected) {
            if(this.state.colorShown === 'white') {
                this.setState({
                    lastColor: 'white',
                    colorShown: this.props.color
                }, this.sendColorChangeToBoard);
            } else if (this.state.colorShown === '#52AB6E') {
                this.setState({
                    lastColor: '#52AB6E',
                    colorShown: 'white'
                }, this.sendColorChangeToBoard);
            } else {
                this.setState({
                    lastColor: this.props.color,
                    colorShown: '#52AB6E'
                }, this.sendColorChangeToBoard);
            }
        } else {
            if(this.state.colorShown === 'white') {
                this.setState({
                    lastColor: 'white',
                    colorShown: this.props.color
                }, this.sendColorChangeToBoard);
            } else {
                this.setState({
                    lastColor: this.props.color,
                    colorShown: 'white'
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
            <div className={styles.tile} style={{backgroundColor: this.state.colorShown }} onClick={() => this.toggleColor()}>
                <div className={styles.word}>
                    {this.props.word}
                </div>
            </div>
        )
    }
}