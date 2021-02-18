const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const { animals } = require('./data/animals.json');

function filterByQuery (query, animalsArray) {
    let personalityTraitsArray = [];
    let filteredResults = animalsArray;
    if (query.personalityTraits){
        console.log('Reached');
        if (typeof query.personalityTraits === 'string'){
            personalityTraitsArray = [query.personalityTraits];
        } else {
            personalityTraitsArray = query.personalityTraits;
        }
        personalityTraitsArray.forEach(trait => {
            filteredResults = filteredResults.filter( 
                animal => animal.personalityTraits.indexOf(trait) !== -1
            )
        })
    }
    if (query.diet){
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.name){
        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    if (query.species){
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    return filteredResults;
}

app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query){
        results = filterByQuery(req.query, results);
    }
    console.log(results);
    res.json(results);
})

app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}.`)
})