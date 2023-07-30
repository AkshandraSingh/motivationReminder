const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Motivation',{
    useNewUrlParser: true,
})

mongoose.connection.on('error',(err)=>{
    console.log("Mongoose Connection Error 🤦‍♂️")
    console.log(err)
})

mongoose.connection.on('connected', () => {
    console.log("MongoDb is Connected 😀")
})