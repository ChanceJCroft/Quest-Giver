const { generateQuest } = require('./controllers/openaiController')
const express = require('express')

//Express Setup
const app = express();
app.listen(4000, () => console.log('Working on Port 4000'))


//Middleware
app.use(express.json())


//Dont think this will be needed
/* //make use of a static folder called 'public' for FE
app.use(express.static('public')) */

//Routes
app.post('/openai/quest', generateQuest)