const express = require('express');
const moment = require('moment');
const app = express()
const port = process.env.PORT || 3000;
const basicAuth = require('express-basic-auth')

app.use(basicAuth({
    users: {
        'johnathan@studi.com': 'sup3rS3cr3t',
        'ieloushana@studi.com': 'YouKn0wN0thingJhon'
    },
    challenge: true
}))

// Suite du fichier, à laisser à l'identique !
app.use(express.json())