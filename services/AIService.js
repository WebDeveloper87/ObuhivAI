const {GoogleGenAI} = require('@google/genai');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not defined');
}

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

let AIService = {
    processPrompt: async function(prompt) {
        return await  ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    }).then(result => result.text);
    }
}

module.exports = AIService;