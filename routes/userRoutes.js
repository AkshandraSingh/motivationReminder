const express = require('express')
const path = require('path')
const fetchMotivationalWithEmail = require('../controller/userController')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'views', 'motivationSender.html'));
});

router.post('/emailSender', fetchMotivationalWithEmail);

module.exports = router
