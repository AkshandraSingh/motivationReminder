const { transporter } = require('../service/emailInfo')
const axios = require('axios');
const path = require('path')

const fetchMotivationalWithEmail = async (req,res) => {
    try {
        const response = await axios.get('https://zenquotes.io/api/random');
        const quote = response.data[0].q;
        const authorName = response.data[0].a;
        let userEmail = req.body.userEmail
        let userName = req.body.userName
        console.log(userName)
        let info = await transporter.sendMail({
            from: "nameste380@gmail.com",
            to: userEmail,
            subject: `Be Motivated ${userName} ✌`,
            html: `<b>Author ${authorName} And Quote is ${quote}</b>`
        });
        res.sendFile(path.join(__dirname, '..', 'views', 'motivationSender2.html'));
        console
        .log(info.response)
    } catch (error) {
        res.status(500).send({
            error: error
        })
    }
};

module.exports = fetchMotivationalWithEmail