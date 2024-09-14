const express = require('express');
const app = express();
const Generator = require("./main");

const middleware = (req, res, next) => {
    if (!req.query.size) {
        req.size = 10;
    }else{
        req.size = req.query.size;
    }
    if(req.query.max_word_length && req.query.max_word_length <= 2){
        res.json({error: 'max_word_length must be greater than 2'});
    }
    next();
};
app.get('/', (req, res) => {
    res.redirect('/api/v0');
});
app.get('/api/v0', middleware,(req, res) => {
    let size = req.size;
    let wordLength = req.query.max_word_length;
    let gen = new Generator();
    if (wordLength){
        gen.maximumWordLength = wordLength;
    }
    res.json({words: gen.GenerateListOfWords(size)});
});
app.listen(3000, () => {
    console.log('server started');
});