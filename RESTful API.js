//  const app = require('express')();
 const express = require('express');
 const app = express();
 const PORT = 8000;

 app.use(express.json())

 app.listen(
    PORT,
    () => console.log('it\'s alive on http://localhost:' + PORT)
 )

 app.get('/getTimeStories/', (req, res) => {
    res.status(200).send([
        {
        "title": "BTS Member Jin Begins Military Service in South Korea",
        "link": "https://time.com/6240599/bts-jin-military-service/"
        },
        {
        "title": "Musk's Twitter Disbands Its Trust and Safety Council",
        "link": "https://time.com/6240594/musk-twitter-disbands-trust-safety-council/"
        },
        {
        "title": "FTX Founder Sam Bankman-Fried Charged With Fraud by SEC After Arrest in the Bahamas",
        "link": "https://time.com/6240579/ftx-sam-bankman-fried-arrested-bahamas/"
        },
        {
        "title": "The Qatar Corruption Scandal Is Rocking the European Parliament",
        "link": "https://time.com/6240539/eva-kaili-european-union-eu-corruption/"
        },
        {
        "title": "The 10 Most Viral Moments of 2022",
        "link": "https://time.com/6240488/most-viral-moments-2022/"
        },
        {
        "title": "Congress Might Work Past Christmas to Keep the Government Funded Because It Thrives on Drama",
        "link": "https://time.com/6240526/congress-funding-fight-christmas-2022/"
        }
    ])
 })

//  app.post('/getTimeStories/:id', (req, res) => {
//     const { title } = req.params;
//     const { link } = req.body;

//     if(!title) {
//         res.status(418).send({message: 'We need title!'})
//     }
//     res.send({
//         link: 'your title is ' + title + ' and link of ' + link,
//     })
//  })