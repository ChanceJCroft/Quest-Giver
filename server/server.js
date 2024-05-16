const { generateQuest } = require('./controllers/openaiController')
const express = require('express')
const cors= require('cors');
require('dotenv');

//Express Setup
const app = express();
app.listen(process.env.LOCALHOST_PORT, () => console.log(`Working on Port ${LOCALHOST_PORT}`))


//Middleware
app.use(express.json())
app.use(cors());

//Routes
app.post('/openai/quest', generateQuest)