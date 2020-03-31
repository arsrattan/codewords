const superagent = require('superagent');

export async function getDefaultWordSet() {
    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/default")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return response.body.words;
}

export async function getAfterHoursWords() {
    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/afterHours")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return response.body.afterHoursWords;
};

export async function getWords() {
    let words = [];

    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/words")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    const {
        nouns,
        verbs,
        adjectives
    } = response.body
    words = [...nouns, ...verbs, ...adjectives]
    return words;
};

export async function getMovies() {
    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/movies")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return response.body.movies;
};

export async function getFamousPeople() {
    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/famousPeople")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return response.body.famousPeople;
};

export async function getCountries() {
    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/countries")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return response.body.countries;
};

export async function getGoofyWords() {
    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/sillyWords")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return response.body.sillyWords;
};

export async function getShows() {
    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/shows")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return response.body.shows;
};

export async function getFictionalCharacters() {
    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/fictionalCharacters")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return response.body.fictionalCharacters;
};

export async function getFoodNames() {
    const response = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/foods")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return response.body.foods;
};

export async function getBrownWords() {
    const brownWords = await superagent
        .get("https://scpnmwczha.execute-api.us-east-1.amazonaws.com/dev/brownWords")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    return brownWords;
};