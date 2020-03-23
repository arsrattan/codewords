import React from 'react';
import styles from './gameform.module.css';

export class GameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.refreshBoard = this.refreshBoard.bind(this);
    }

    handleChange(event) {
        if (/^[a-zA-Z]+$/.test(event.target.value) === true || event.target.value === '') {
            this.setState({
                value: event.target.value
            }, this.refreshBoard);
        }
    }

    refreshBoard() {
        if (this.state.value === '') {
            this.props.handleGameIdChange(this.props.startingWord);
        } else {
            this.props.handleGameIdChange(this.state.value)
        }
    }

    render() {
        return(
            <div>            
                <form>
                    <input type="text" className={styles.input} placeholder={this.props.startingWord} maxLength="15" onChange={this.handleChange} value={this.state.value}/>
                </form>
            </div>
        )
    }
}