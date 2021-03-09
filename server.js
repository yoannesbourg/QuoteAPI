const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});


//Get random quote
app.get('/api/quotes/random', (req, res) => {
    const randomQuote = getRandomElement(quotes)
    res.send({ quote: randomQuote })
})

//Filter quotes by author or get all
app.get('/api/quotes', (req, res) => {
    const filterQuotes = quotes.filter(author => {
        return author.person === req.query.person
    })
    if(req.query.person) {
        res.send({ quotes: filterQuotes })
    } else {
        res.send({ quotes: quotes })
    } 
})