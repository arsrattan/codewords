import React, { useEffect } from 'react';
import Tile from '../tile';
import styles from './board.module.css';
import { Typography } from '@material-ui/core';

const Board = props => {
    console.log('Rendering board!');
    
    useEffect(() => {
        console.log('inside mount for board');
    }, [props.tiles]);

    const renderTile = index => (
        <Tile word={props.tiles[index].word} trueColor={props.tiles[index].trueColor} trackTileClicked={(colorShown) => props.tileClicked(index, colorShown)} spymasterMode={props.spymasterMode} />
    )

    let tileIndexCounter = 0;

    return (
        <div className={styles.board}>
            <div>
                <Typography variant="h2" align="center" gutterBottom>
                    Codenames
                </Typography>
            </div>
            <div className={styles.boardTiles}>
                <div className={styles.tileRow}>
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                </div>
                <div className={styles.tileRow}>
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                </div>
                <div className={styles.tileRow}>
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                </div>
                <div className={styles.tileRow}>
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                </div>
                <div className={styles.tileRow}>
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                    { renderTile(tileIndexCounter++) }
                </div>
            </div>
        </div>
    )
}

export default React.memo(Board, (prevProps, newProps) => {
    return prevProps.tiles === newProps.tiles && prevProps.spymasterMode === newProps.spymasterMode;
});