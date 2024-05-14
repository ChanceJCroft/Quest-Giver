const {generateQuest} = require('./controllers/openaiController')
const express = require('express')

//setup
const app = express();
app.listen(4000, () => console.log('Working on Port 4000'))


//middleware
app.use(express.json())

//make use of a static folder called 'public' for FE
app.use(express.static('public'))

//routes
app.post('/openai/quest', generateQuest)