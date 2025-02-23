const mongoose = require('mongoose');
const dotenv = require('dotenv')


const connectDatabase = () => {
    // mongoose.connect(process.env.DB_LOCAL_URI, {

    // mongoose.connect("mongodb://localhost:27017/kdh", {    
    mongoose.connect('mongodb+srv://parul3078:snoi.0103@cluster0.uxhwugz.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })

    // node --unhandled-rejections=strict backend/server.js

}

module.exports = connectDatabase
