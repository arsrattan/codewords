import { getWords } from './wordsClient';
import randomWords from 'random-words'

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

    for(let i = 0; i < 25; i++) {
        const intFromBits = parseInt(fourteenBitStr, 2) << i;
        let intFromCircularBits = 0;
        if (bitsInInt < fourteenBitStr.length + i) {
            const circularBitsLost = fourteenBitStr.length + i - bitsInInt;
            let circularBitStr = '';
            for(let j = 0; j < circularBitsLost; j++) {
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

export function getColorsAtHashedIndexes(hashCode) {
    const colorList = createColorList(hashCode % 2 === 1);
    const colorListAtHashedIndexes = [];
    const fiveBitStr = '11111'

    for(let i = 0; i < 25; i++) {
        const intFromBits = parseInt(fiveBitStr, 2) << i;
        const colorIndex = Math.abs(hashCode & intFromBits) % colorList.length;
        colorListAtHashedIndexes.push(colorList[colorIndex])
        colorList.splice(colorIndex, 1);
    }

    return colorListAtHashedIndexes
}

export async function generateBoardSetup(gameId, providedWordList) {
    let wordList = providedWordList;
    if (providedWordList === undefined) {
        wordList = await getWords();
    }

    let startingWord = gameId;
    if (startingWord === undefined || startingWord === '') {
        startingWord = randomWords();
    }
    const hashedWord = calcHashCode(startingWord);
    return {
        gameId: startingWord,
        words: getWordsAtHashedIndexes(hashedWord, wordList),
        colors: getColorsAtHashedIndexes(hashedWord)
    };
}

export function createColorList(blueFirst) {
    let colorList = ['grey'];
    for (let i = 0; i < 7; i++) {
        colorList.push('#E8E889');
    }
    for (let i = 0; i < 8; i++) {
        colorList.push('#83B1DE');
        colorList.push('#F37472');
    }
    colorList.push(blueFirst ? '#83B1DE' : '#F37472');
    return colorList;
}