const { OpenAI } = require('openai')

const openai = new OpenAI({
  apiKey: 'sk-proj-tRYR65mtgGKw4x2ZRf0AT3BlbkFJd0LyG1qTuW69RPWTjpHJ'//process.env.OPEN_AI_KEY,
})


const generateQuest = async (req, res) => {
    //TODO: -- Replace hard coded types with the ones from the body
    const { enemyType, questType } = req.body;

    const quest = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: `Come up with a Dungeons and Dragons 5e quest using Orc enemies and a Combat style.` },
          ],
          max_tokens: 250
    })

    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: `Fantasy party encountering Orc creatures during a Combat quest.`,
        n: 1,
        size: "1024x1024",
    })

    res.status(200).json({
        quest: quest.choices[0].message.content,
        image: image.data[0].url
    })
}

module.exports = { generateQuest }