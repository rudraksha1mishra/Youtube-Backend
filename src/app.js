const express = require('express');
const cors = require('cors')
const cokiesParser = require('cookie-parser')

const app = express();
//some middleware to handle the url and cokies value.
app.use(cors({
    origin : Process.env.origin,
    Credential : true
}))
app.use(express.json({limit : "16kb"}));
app.use(express.urlencoded({
    extended : true,
    limit : "16kb"
}))
app.use(cokiesParser)
app.use(express.static('public'));