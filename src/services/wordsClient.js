const superagent = require('superagent');

export async function getWords() {

    let words = [];

    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/words")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")

    const { nouns, verbs, adjectives } = response.body
    words = [...nouns, ...verbs, ...adjectives]

    return words;
}