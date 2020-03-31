import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import styles from './game.module.css';
import Board from '../board';
import LoadingInfo from '../loadingInfo';
import AppBarHeader from '../appBar';
import styleDefinitions from '../../styles/globalStyles.json';
import generateGameSetup, { dictionaries } from '../../services/gameLoader';
import ListModal from '../listModal';

const Game = props => {

    console.log('Rendering game!');

    const [dictionaryName, setDictionaryName] = useState(null);
    const [dictionaryWords, setDictionaryWords] = useState(null);
    const [gameId, setGameId] = useState(null);
    const [tiles, setTiles] = useState(Array(25).fill(null));
    const [spymasterMode, setSpymasterMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [teamConfigs, setTeamConfigs] = useState(null);
    const [firstTeamColor, setFirstTeamColor] = useState(null);
    const [firstTeamOriginalCount, setFirstTeamOriginalCount] = useState(0);
    const [firstTeamRemaining, setFirstTeamRemaining] = useState(0);
    const [secondTeamColor, setSecondTeamColor] = useState(null);
    const [secondTeamOriginalCount, setSecondTeamOriginalCount] = useState(0);
    const [secondTeamRemaining, setSecondTeamRemaining] = useState(0);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    const handleSpymasterToggle = () => {
        const newTeamConfigs = Object.assign({}, teamConfigs);
        let newSpymasterMode = spymasterMode;
        newTeamConfigs.firstTeam.remaining = newTeamConfigs.firstTeam.originalCount;
        newTeamConfigs.secondTeam.remaining = newTeamConfigs.secondTeam.originalCount;
        newSpymasterMode = !newSpymasterMode;
        setTeamConfigs(newTeamConfigs);
        setSpymasterMode(newSpymasterMode);
    };

    const handleDictionaryChange = async (newDictionaryName) => {
        if (newDictionaryName === "Create Your Own") {
            setCreateModalOpen(true);
            return;
        }
        if (newDictionaryName === dictionaryName) {
            return;
        }
        setLoading(true);
        await loadNewGame(undefined, undefined, teamConfigs.firstTeam.color, teamConfigs.secondTeam.color, newDictionaryName);
        setLoading(false);
    }

    const handleModalClose = data => {
        console.log('Closed!' + data);
    }

    const incrementTeamCount = teamColor => {
        const newTeamConfigs = Object.assign({}, teamConfigs);
        if (teamColor === newTeamConfigs.firstTeam.color) {
            newTeamConfigs.firstTeam.remaining++;
        } else if (teamColor === newTeamConfigs.secondTeam.color) {
            newTeamConfigs.secondTeam.remaining++;
        }
        setTeamConfigs(newTeamConfigs);
    }

    const decrementTeamCount = teamColor => {
        const newTeamConfigs = Object.assign({}, teamConfigs);
        if (teamColor === newTeamConfigs.firstTeam.color) {
            newTeamConfigs.firstTeam.remaining--;
        } else if (teamColor === newTeamConfigs.secondTeam.color) {
            newTeamConfigs.secondTeam.remaining--;
        }
        console.log(`New Team Configs: ${JSON.stringify(newTeamConfigs, undefined, 2)}`);
        setTeamConfigs(newTeamConfigs);
    }

    const updateScores = (tileIndex, colorShown) => {
        console.log(`First team remaining in update scores: ${firstTeamRemaining}`);
        // if (colorShown === styleDefinitions.neutralCardColor) {
        //     incrementTeamCount(tiles[tileIndex].trueColor);
        // } else {
        //     if (spymasterMode === true) {
        //         if (colorShown === styleDefinitions.greenCardColor) {
        //             decrementTeamCount(tiles[tileIndex].trueColor);
        //         }
        //     } else {
        //         decrementTeamCount(tiles[tileIndex].trueColor);
        //     }
        // }
    };

    const loadNewGame = async (gameId, dictionaryWords, firstTeamColor, secondTeamColor, dictionaryName) => {
        try {
            const newGameSetup = await generateGameSetup(gameId, dictionaryWords, firstTeamColor, secondTeamColor, dictionaryName);
            const newTiles = Array(25).fill({}).map((_, index) => {
                return {
                    word: newGameSetup.words[index],
                    trueColor: newGameSetup.colors[index],
                    revealed: false
                };
            });
            const originalCountFirstTeam = newGameSetup.colors.filter(color => color === newGameSetup.colorA).length;
            const originalCountSecondTeam = newGameSetup.colors.filter(color => color === newGameSetup.colorB).length;
            const newTeamConfigs = {
                firstTeam: {
                    color: newGameSetup.colorA,
                    originalCount: originalCountFirstTeam,
                    remaining: originalCountFirstTeam
                },
                secondTeam: {
                    color: newGameSetup.colorB,
                    originalCount: originalCountSecondTeam,
                    remaining: originalCountSecondTeam
                }
            };
            console.log(`Game id when loading new game: ${newGameSetup.gameId}`);
            console.log(`Tiles when setting up game: ${JSON.stringify(newTiles, undefined, 2)}`);
            console.log(`Teamconfigs when setting up game: ${JSON.stringify(newTeamConfigs, undefined, 2)}`);
            setGameId(newGameSetup.gameId);
            setTiles(newTiles);
            setTeamConfigs(newTeamConfigs);
            setDictionaryWords(newGameSetup.dictionary);
            setFirstTeamColor(newGameSetup.colorA);
            setFirstTeamOriginalCount(originalCountFirstTeam);
            setFirstTeamRemaining(originalCountFirstTeam);
            setSecondTeamColor(newGameSetup.colorB);
            setSecondTeamOriginalCount(originalCountSecondTeam);
            setSecondTeamRemaining(originalCountSecondTeam);
            if (newGameSetup.dictionaryName !== null && newGameSetup.dictionaryName !== undefined && newGameSetup.dictionaryName !== '') {
                setDictionaryName(newGameSetup.dictionaryName);
            }
        } catch (err) {
            console.log('An error was received while loading the new game', err);
        }
    }

    useEffect(() => {
        console.log('In here');
        const createGameConfig = async () => await loadNewGame();
        createGameConfig().then(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        console.log(`New team configs: ${JSON.stringify(teamConfigs, undefined, 2)}`);
    }, [teamConfigs])

    useEffect(() => {
        console.log('First team remaining: ' + firstTeamRemaining);
    }, [firstTeamRemaining]);

    const renderLoadingSpinner = () => (
        <LoadingInfo introText="Loading Game" headingText="Codewords"/>
    );
    
    const renderGame = () => (
        <div className={styles.game}>
            <div className={styles.gameHeader}>
                <AppBarHeader 
                teamConfigs={teamConfigs}
                gameId={gameId} 
                gameIdChanged={async (newGameId) => await loadNewGame(newGameId, dictionaryWords)}
                spymasterClicked={() => handleSpymasterToggle()} 
                dictionaryOptions={Object.keys(dictionaries)} 
                onDictionaryChange={async (newDictionaryName) => await handleDictionaryChange(newDictionaryName)} 
                dictionarySelected={dictionaryName}
                />
            </div>
            <div className={styles.gameBoard}>
                <Board
                tiles={tiles}
                tileClicked={(tileIndex, colorShown) => {
                    console.log('Tile clicked! First team remaining is ' + firstTeamRemaining);
                    updateScores(tileIndex, colorShown)
                }}
                spymasterMode={spymasterMode}
                />
            </div>
        </div>
    );

    return (
        <div className={styles.gameScreen}>
            {loading === true
            ? renderLoadingSpinner()
            : renderGame()}
        </div>
    )
};

export default (Game);