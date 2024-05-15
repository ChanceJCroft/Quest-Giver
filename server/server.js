const { generateQuest } = require('./controllers/openaiController')
const express = require('express')
const cors= require('cors');

//Express Setup
const app = express();
app.listen(4000, () => console.log('Working on Port 4000'))


//Middleware
app.use(express.json())
app.use(cors());

//Routes
app.post('/openai/quest', generateQuest)