const nodemailer = require('nodemailer');
let senderName = "nameste380@gmail.com"
let passName = "gayfkwafzcudvuri"

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: senderName,
        pass: passName,
    }
});

module.exports = {
    transporter
}