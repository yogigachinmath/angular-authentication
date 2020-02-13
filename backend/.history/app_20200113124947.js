const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('co')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors())
