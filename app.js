const express = require('express');
const axios = require('axios');
const path = require('path');

const staticPath = path.resolve(__dirname, 'assets');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static(staticPath));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.writeHead("200", {
        "Content-Type" : "text/html"
    })
    res.end("<h1>This is About Page</h1>")
})

app.get('/weather', (req, res) => {
    if (!req.query.search) {
        return res.send({
            message: "Error"
        })
    }

    res.send({
        location: "Philadelphia"
    })

    // res.writeHead("200", {
    //     "Content-Type" : "text/html"
    // })
    // res.end(`<h1>This is ${req.url}</h1>`)
})

app.get('/api', (req, res) => {
    const url = 'https://fortnite-api.theapinetwork.com/upcoming/get';
    axios.get(url)
    .then((response) => {
        res.send(response.data.data);
    })

})

app.listen(port, () => {
    console.log("Its running");
});