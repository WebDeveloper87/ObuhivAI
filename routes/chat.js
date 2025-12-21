var express = require('express');
var router = express.Router();
let AIService = require('../services/AIService');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('chat');
});

router.post('/ask', async function(req, res, next) {
    let prompt = req.body.prompt;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        let response = await AIService.processPrompt(prompt);
        console.log(response);
        res.json({answer: response});
    } catch (error) {
        res.status(500).send({})
    }
})

module.exports = router;
