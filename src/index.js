const express = require("express");
const PORT = process.env.PORT || 666;
const app = express();
app.use( express.json() );

app.post("/", (req, res) => {

    console.log('Received Webhook: ' + JSON.stringify(req.body));
    res.sendStatus( 200 );
    const play = require('audio-play');
    const load = require('audio-loader');

    load('./sounds/alarm1.wav').then(play);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));