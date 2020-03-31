import {
    getWords,
    getMovies,
    getFamousPeople,
    getCountries,
    getGoofyWords,
    getShows,
    getFictionalCharacters,
    getFoodNames,
    getAfterHoursWords,
    getDefaultWordSet
} from './wordsClient';
import randomWords from 'random-words'
import styleDefinitions from '../styles/globalStyles.json';

export const dictionaries = {
    'Default': getDefaultWordSet,
    'After Hours': getAfterHoursWords,
    'Nouns/Adjectives/Verbs': getWords,
    'Blockbuster Movies': getMovies,
    'Famous People': getFamousPeople,
    'Countries': getCountries,
    'Silly Words': getGoofyWords,
    'Popular Shows': getShows,
    'Fictional Characters': getFictionalCharacters,
    'Foods': getFoodNames
};

export function calcHashCode(str) {
    return str.split("").reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a
    }, 0);
}

export function getWordsAtHashedIndexes(hashCode, wordList) {
    const wordListAtHashedIndexes = [];
    const fourteenBitStr = '11111111111111'
    const bitsInInt = 32;
    const wordListCopy = Array.from(wordList);

    for (let i = 0; i < 25; i++) {
        const intFromBits = parseInt(fourteenBitStr, 2) << i;
        let intFromCircularBits = 0;
        if (bitsInInt < fourteenBitStr.length + i) {
            const circularBitsLost = fourteenBitStr.length + i - bitsInInt;
            let circularBitStr = '';
            for (let j = 0; j < circularBitsLost; j++) {
                circularBitStr = circularBitStr.concat('1');
            }
            intFromCircularBits = parseInt(circularBitStr, 2);
        }
        const bitsAsInt = intFromBits + intFromCircularBits;
        const wordIndex = Math.abs(hashCode & bitsAsInt) % wordListCopy.length;
        wordListAtHashedIndexes.push(wordListCopy[wordIndex]);
        wordListCopy.splice(wordIndex, 1);
    }

    return wordListAtHashedIndexes;
}

export function getColorsAtHashedIndexes(hashCode, teamAColor, teamBColor) {
    const colorList = createColorList(hashCode % 2 === 1, teamAColor, teamBColor);
    const colorListAtHashedIndexes = [];
    const fiveBitStr = '11111'

    for (let i = 0; i < 25; i++) {
        const intFromBits = parseInt(fiveBitStr, 2) << i;
        const colorIndex = Math.abs(hashCode & intFromBits) % colorList.length;
        colorListAtHashedIndexes.push(colorList[colorIndex])
        colorList.splice(colorIndex, 1);
    }

    return colorListAtHashedIndexes
}

async function generateGameSetup(gameId, providedWordList, teamAColor, teamBColor, providedDictionaryName) {
    let wordList = providedWordList;
    let dictionaryName = providedDictionaryName;

    if (wordList === undefined || wordList === null) {
        if (dictionaryName === undefined || dictionaryName == null || dictionaryName === '') {
            dictionaryName = 'Default';
        }
        if (dictionaries[dictionaryName] === undefined) {
            throw new Error('The given dictionary name is invalid');
        }

        wordList = await dictionaries[dictionaryName]();
    }

    let startingWord = gameId;
    if (startingWord === undefined || startingWord === null || startingWord === '') {
        startingWord = randomWords();
    }
    const colorA = (teamAColor === undefined || teamAColor === null) ? styleDefinitions.blueCardColor : teamAColor;
    const colorB = (teamBColor === undefined || teamBColor === null) ? styleDefinitions.redCardColor : teamBColor;
    const hashedWord = calcHashCode(startingWord);
    return {
        gameId: startingWord,
        words: getWordsAtHashedIndexes(hashedWord, wordList),
        colors: getColorsAtHashedIndexes(hashedWord, colorA, colorB),
        dictionary: wordList,
        colorA,
        colorB,
        dictionaryName
    };
}

export function createColorList(teamAFirst, teamAColor, teamBColor) {
    let colorList = [styleDefinitions.endgameCardColor];
    for (let i = 0; i < 7; i++) {
        colorList.push(styleDefinitions.yellowCardColor);
    }
    for (let i = 0; i < 8; i++) {
        colorList.push(teamAColor);
        colorList.push(teamBColor);
    }
    colorList.push(teamAFirst ? teamAColor : teamBColor);
    return colorList;
}

export default generateGameSetup;