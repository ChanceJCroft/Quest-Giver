const { OpenAI } = require('openai')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
})


const generateQuest = async (req, res) => {
    const { enemyType, questType, combatLevel } = req.body;
    const highOrLowLevel = combatLevel >= 10 ? 'High level' : 'Low level';

    const quest = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: `Come up with a level ${combatLevel} Dungeons and Dragons 5e quest with ${enemyType} enemies and a ${questType} quest style.` },
          ],
          max_tokens: 500
    })

    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: `${highOrLowLevel} fantasy party encountering ${enemyType} creatures during a ${questType} quest.`,
        n: 1,
        size: "1024x1024",
    })

    res.status(200).json({
        quest: quest.choices[0].message.content,
        image: image.data[0].url
    })
}

module.exports = { generateQuest }