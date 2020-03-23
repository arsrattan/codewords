export default function generateRandomWords() {
    const randomWordJson = {
        apple: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        run: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        cat: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        walk: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        number: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        workout: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        oil: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        wait: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        time: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        climb: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        people: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        turn: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        car: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        close: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        turtle: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        play: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        model: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        grind: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        mouse: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        swim: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        dog: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        listen: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        music: {
            definitions: [],
            partsOfSpeech: ['Noun']
        },
        watch: {
            definitions: [],
            partsOfSpeech: ['Verb']
        },
        movie: {
            definitions: [],
            partsOfSpeech: ['Noun']
        }
    }
    
    return randomWordJson;
}

export function createColorList(blueFirst) {
    let colorList = ['grey'];
    for (let i = 0; i < 9; i++) {
        colorList.push('#E8E889');
    }
    for (let i = 0; i < 8; i++) {
        colorList.push('#83B1DE');
        colorList.push('#F37472');
    }
    colorList.push(blueFirst ? '#83B1DE' : '#F37472');
    colorList.sort(() => Math.random() - 0.5); // Shuffle list
    return colorList;
}