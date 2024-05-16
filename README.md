#  Dungeons and Dragons Quest Generator (Working Title)
Dungeons and Dragons Quest Generator is exactly what it sounds like. Through the UI, a user is prompted to enter a few details about a Dungeons
and Dragon 5E quest they want to create. Feel free to use it with your own OpenAI API key (it does cost money after all) to create both quest descriptions
and images.

![](header.png)

## Installation and Setup

Install and Setup of the Server:

```sh
#Clone the repository.
git clone https://github.com/ChanceJCroft/Quest-Giver.git

#Navigate into server directory
cd server

#Install dependencies for server
npm install

#Create a .env file and add a `OPENAI_KEY=key-goes-here`.

#Start up the server
Node server.js

#Server should be running on Port 4000 (in v1).
```
NOTE: If you are having trouble with the OpenAI API key, see these instructions on how to set it at the machine level:
![image](https://github.com/ChanceJCroft/Quest-Giver/assets/66639666/849dfcc3-73ac-452c-8b9f-86dfa627fc34)

Please note that in _this_ example you would need to set the OpenAI API key with that slightly altered name like such:

```sh
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
```


Installation and Setup of the Frontend:

```sh
#Clone the repository (if you haven't already)
git clone https://github.com/ChanceJCroft/Quest-Giver.git

#Navigate into the existing Frontend
cd frontend\'Quest Giver Vue Frontend'

#Install dependencies
npm install


#Spin up the Frontend in dev mode
npm run dev

#Frontend should be running on Port 5173 (in v1).
```


## Screenshot

Once a quest has been provided it should look something like this:
![image](https://github.com/ChanceJCroft/Quest-Giver/assets/66639666/580433b9-bf91-4237-a04c-44102276ce56)


If you would like to adjust the prompt for different outcomes, you can do that in `openAiController.js`.
Simply adjust the 'content' portion of the message (where the variables are being used) to get different responses.
![image](https://github.com/ChanceJCroft/Quest-Giver/assets/66639666/09cbc7c2-987b-487f-aabf-27eb203c1f17)


## Upcoming Changes (5/16/24)
- Global state management via Vuex or Pinia
- Unit testing as logic becomes more complicated
- New Frontends to run against the Node app
- More quest functionality (more than simply generating a quest)
- Further UI cleanup
- Enable switches for deployment in different modes (currently hard coded to localhost:4000)

## Meta

Chance Croft – chance.croft2@gmail.com

[https://github.com/ChanceJCroft/]

## Contributing

If anyone is interested in contributing, please just reach out to let me know. Otherwise, feel free to make a copy and
do whatever you want with it! You have my full permission.
