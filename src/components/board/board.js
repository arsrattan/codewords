import React from 'react';
import { Tile } from '../tile/tile';
import { Button } from '../button/button';
import styles from './board.module.css';

export class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            spymasterSelected: false
        };
        this.showAllColors = this.showAllColors.bind(this);
    }

    showAllColors() {
        this.setState({
            spymasterSelected: !this.state.spymasterSelected
        })
    }

    render() {
        let indexCounter = 0;

        return(
            <div className={styles.board}>
            <Button onClick={() => this.showAllColors()} text='SpyMaster'/>
            <div className={styles.boardTiles}>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                </div>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                </div>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                </div>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                </div>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.props.wordList[indexCounter]} color={this.props.colorList[indexCounter++]}/>
                </div>
            </div>
            </div>
        )
    }
}