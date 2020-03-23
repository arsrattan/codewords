import React from 'react';
import { Tile } from '../tile/tile';
import { SpymasterButton } from '../spymasterButton/spymasterButton';
import styles from './board.module.css';
import { Scorecard } from '../scorecard/scorecard';
import { GameForm } from '../gameform/gameform';
import { generateBoardSetup } from '../../services/gameLoader';

export class Board extends React.Component {

    constructor(props) {
        super(props);
        const boardSetup = generateBoardSetup();
        this.state = {
            spymasterSelected: false,
            colorCounter: {
                'white': 25,
                '#83B1DE': 0,
                '#F37472': 0,
                '#52AB6E': 0,
                'E8E889': 0
            },
            wordList: boardSetup.words,
            colorList: boardSetup.colors,
            gameId: boardSetup.gameId
        };
        this.setColorCounters = this.setColorCounters.bind(this);
        this.showAllColors = this.showAllColors.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        this.startingWord = this.state.gameId;
        this.setColorCounters();
    }

    showAllColors() {
        this.setState({
            spymasterSelected: !this.state.spymasterSelected,
            colorCounter: {
                'white': 25,
                '#83B1DE': 0,
                '#F37472': 0,
                '#52AB6E': 0,
                'E8E889': 0
            }
        })
    }

    updateScore(lastColor, colorShown) {
        let newColorCounts = {};
        Object.assign(newColorCounts, this.state.colorCounter);
        if (lastColor !== undefined) {
            newColorCounts[lastColor]--;
        } else {
            newColorCounts['white']--;
        }
        newColorCounts[colorShown]++;

        this.setState({
            colorCounter: newColorCounts
        });
    }

    updateBoard(newId) {
        const boardSetup = generateBoardSetup(newId);
        this.setState({
            wordList: boardSetup.words,
            colorList: boardSetup.colors,
            gameId: newId
        }, this.setColorCounters);
    }

    setColorCounters() {
        this.blueCount = this.state.colorList.reduce((total, currentColor) => {
            if (currentColor === '#83B1DE') {
                return total + 1;
            }
            return total;
        }, 0);
        this.redCount = 17 - this.blueCount;
    }

    render() {
        let indexCounter = 0;

        const renderScoreboard = () => {
            if (this.state.spymasterSelected === true) {
                return;
            }
            return (
                <div>
                    <Scorecard id='blueScorecard' color='#83B1DE' tilesRemaining={this.blueCount - this.state.colorCounter['#83B1DE']}/>
                    <Scorecard id='redScorecard' color='#F37472' tilesRemaining={this.redCount - this.state.colorCounter['#F37472']}/>
                </div>
            )
        }

        return(
            <div className={styles.board}>
            <div className={styles.boardHeader}>
                {
                    renderScoreboard()
                }
                <GameForm startingWord={this.startingWord} handleGameIdChange={(newId) => this.updateBoard(newId)}/>
                <SpymasterButton onClick={() => this.showAllColors()} text='SpyMaster'/>
            </div>
            <div className={styles.boardTiles}>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                </div>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                </div>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                </div>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                </div>
                <div className={styles.tileRow}>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                    <Tile spymasterSelected={this.state.spymasterSelected} word={this.state.wordList[indexCounter]} color={this.state.colorList[indexCounter++]} trackClick={(lastColor, colorShown) => this.updateScore(lastColor, colorShown)}/>
                </div>
            </div>
            </div>
        )
    }
}