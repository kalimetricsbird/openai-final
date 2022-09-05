import { Configuration, OpenAIApi } from "openai";
console.log(process.env.OPENAI_API_KEY)
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
//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
export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-curie-001",
    prompt: req.body.animal,
    temperature: 0.3,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  
  res.status(200).json({ result: completion.data.choices[0].text });
}
// function generatePrompt(animal) {
//   const capitalizedAnimal =
//     animal[0].toUpperCase() + animal.slice(1).toLowerCase();
//   return `Suggest three names for an animal that is a superhero.

// Animal: Cat
// Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
// Animal: Dog
// Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
// Animal: ${capitalizedAnimal}
// Names:`;
// }
