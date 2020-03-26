import React from 'react';
import { Tile } from '../tile/tile';
import { SpymasterButton } from '../spymasterButton/spymasterButton';
import styles from './board.module.css';
import { Scorecard } from '../scorecard/scorecard';
import { GameForm } from '../gameform/gameform';
import { generateBoardSetup } from '../../services/gameLoader';
import { LoadingInfo } from '../loadingInfo/loadingInfo';
import styleVars from '../../styles/globalStyles.json'
import { DictionaryMenu } from '../dictionaryMenu/dictionaryMenu';
import { AppBarHeader } from '../appBar/appBar';

export class Board extends React.PureComponent {

    static TOTAL_PLAYER_CARDS = 17;

    constructor(props) {
        super(props);
        this.state = {
            spymasterSelected: false,
            colorCounter: this.initColorCounter(),
            loading: true
        };
        this.initColorCounter = this.initColorCounter.bind(this);
        this.setColorCounters = this.setColorCounters.bind(this);
        this.showAllColors = this.showAllColors.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
    }

    initColorCounter() {
        const colorCounter = {};
        const { neutralCardColor, blueCardColor, redCardColor, yellowCardColor, endCardColor } = styleVars;
        colorCounter[neutralCardColor] = 25;
        colorCounter[blueCardColor]= 0;
        colorCounter[redCardColor] = 0;
        colorCounter[yellowCardColor] = 0;
        colorCounter[endCardColor] = 0;
        return colorCounter;
    }

    async componentWillMount() {
        const boardSetup = await generateBoardSetup(undefined, this.props.masterWordList);
        this.setState({
            wordList: boardSetup.words,
            colorList: boardSetup.colors,
            gameId: boardSetup.gameId,
        });
        this.setColorCounters();
        this.setState({
            loading: false
        })
    }

    showAllColors() {
        this.setState({
            spymasterSelected: !this.state.spymasterSelected,
            colorCounter: this.initColorCounter()
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

    async updateBoard(newId) {
        const boardSetup = await generateBoardSetup(newId, this.props.masterWordList);
        this.setState({
            wordList: boardSetup.words,
            colorList: boardSetup.colors,
            gameId: newId,
            spymasterSelected: false
        });
        this.setColorCounters();
    }

    setColorCounters() {
        this.blueCount = this.state.colorList.reduce((totalBlues, currentColor) => {
            if (currentColor === styleVars["blueCardColor"]) {
                return ++totalBlues;
            }
            return totalBlues;
        }, 0);
        this.redCount = Board.TOTAL_PLAYER_CARDS - this.blueCount;
    }

    render() {
        const renderScoreboard = () => {
            if (!this.state.spymasterSelected === true) {
                return (
                    <div className={styles.scoreboard}>
                        <Scorecard color={styleVars["blueCardColor"]} tilesRemaining={this.blueCount - this.state.colorCounter[styleVars["blueCardColor"]]}/>
                        <Scorecard color={styleVars["redCardColor"]} tilesRemaining={this.redCount - this.state.colorCounter[styleVars["redCardColor"]]}/>
                    </div>
                )
            }
        }

        const renderHeader = () => {
            return (
                <AppBarHeader />
            )
            return (
                <div className={styles.boardHeader}>
                    {renderScoreboard()}
                    <GameForm gameId={this.state.gameId} gameIdChanged={async (newGameId) => await this.updateBoard(newGameId)}/>
                    <SpymasterButton onClick={() => this.showAllColors()}/>
                </div>
            )
        }

        const renderGametiles = () => {
            let indexCounter = 0;
            return (
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
            )
        }

        const renderBoard = () => {
            return (
                <div className={styles.board}>
                    {renderHeader()}
                    {renderGametiles()}
                </div>
            )
        }

        if(this.state.loading) {
            return <LoadingInfo introText="Loading Board" headingText="Qodenames"/>
        } else {
            return renderBoard()
        }
    }
}