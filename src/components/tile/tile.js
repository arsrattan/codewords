import React from 'react';
import styles from './tile.module.css';

export class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colorShown: 'white'
        }
        this.toggleColor = this.toggleColor.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.spymasterSelected !== this.props.spymasterSelected) {
            if (newProps.spymasterSelected === true) {
                this.setState({
                    colorShown: this.props.color
                });
            } else {
                this.setState({
                    colorShown: 'white'
                });
            }
        }
    }

    toggleColor() {
        if(this.props.spymasterSelected) {
            if(this.state.colorShown === 'white') {
                this.setState({
                    colorShown: this.props.color
                });
            } else if (this.state.colorShown === '#52AB6E') {
                this.setState({
                    colorShown: 'white'
                });
            } else {
                this.setState({
                    colorShown: '#52AB6E'
                });
            }
        } else {
            if(this.state.colorShown === 'white') {
                this.setState({
                    colorShown: this.props.color
                });
            } else {
                this.setState({
                    colorShown: 'white'
                });
            }
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