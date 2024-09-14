const express = require('express');
const app = express();
const Generator = require("./main");

const middleware = (req, res, next) => {
    if (!req.query.size) {
        res.status(400).json({error:'Size parameter is missing'});
        return;
    }
    next();
};
app.get('/', (req, res) => {
    res.send('Hello World');
    
});
app.get('/api/v0', middleware,(req, res) => {
    let size = req.query.size;
    let wordLength = req.query.word_length;
    let gen = new Generator();
    if (wordLength){
        gen.maximumWordLength = wordLength;
    }
    res.json({words: gen.GenerateListOfWords(size)});
});
app.listen(3000, () => {
    console.log('server started');
});