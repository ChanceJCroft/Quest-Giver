const { OpenAI } = require('openai')

const openai = new OpenAI({
  apiKey: 'sk-proj-tRYR65mtgGKw4x2ZRf0AT3BlbkFJd0LyG1qTuW69RPWTjpHJ'//process.env.OPEN_AI_KEY,
})


const generateQuest = async (req, res) => {
    //TODO: -- Replace hard coded types with the ones from the body
    const { enemyTypeInput, questTypeInput, combatLevelInput } = req.body;
    const highOrLowLevel = combatLevelInput >= 10 ? 'High level' : 'Low level';

    const quest = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: `Come up with a level ${combatLevelInput} Dungeons and Dragons 5e quest with ${enemyTypeInput} enemies and a ${questTypeInput} quest style.` },
          ],
          max_tokens: 500
    })

    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: `${highOrLowLevel} fantasy party encountering ${enemyTypeInput} creatures during a ${questTypeInput} quest.`,
        n: 1,
        size: "1024x1024",
    })

    res.status(200).json({
        quest: quest.choices[0].message.content,
        image: image.data[0].url
    })
}

module.exports = { generateQuest }