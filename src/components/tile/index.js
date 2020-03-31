import React, { useEffect, useState } from 'react';
import styles from './tile.module.css';
import styleDefinitions from '../../styles/globalStyles.json';

const Tile = props => {
    const [colorShown, setColorShown] = useState(props.spymasterMode === true ? props.trueColor : styleDefinitions.neutralCardColor);

    const handleTileClick = () => {
        const newColor = getColorToDisplay();
        setColorShown(newColor);
        props.trackTileClicked(newColor);
    };

    const getColorToDisplay = () => {
        let colorRotation = [styleDefinitions.neutralCardColor, props.trueColor];
        if (props.spymasterMode === true && props.trueColor !== styleDefinitions.endgameCardColor) {
          colorRotation.push(styleDefinitions.greenCardColor);
        }
        return colorRotation[(colorRotation.indexOf(colorShown) + 1) % colorRotation.length];
    }

    useEffect(() => {
        const revealCard = () => setColorShown(props.trueColor);
        const hideCard = () => setColorShown(styleDefinitions.neutralCardColor);    
        props.spymasterMode === true ? revealCard() : hideCard();
    }, [props.spymasterMode, props.trueColor]);

    return(
        <div className={styles.tileContainer}>
            <div className={styles.tile} style={{backgroundColor: colorShown}} onClick={() => handleTileClick()}>
                <div className={styles.word}>
                    <span>{props.word}</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Tile, (prevProps, newProps) => {
    return prevProps.colorShown === newProps.colorShown && prevProps.word === newProps.word && prevProps.spymasterMode === newProps.spymasterMode
});