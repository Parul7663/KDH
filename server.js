const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

//setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })


// dotenv.config({path:'backend/config/config.env'})

const port = process.env.PORT || 4000
//connecting to db
connectDatabase();

app.listen(port , ()=>{
    console.log(`server started on port : ${port} in  ${process.env.NODE_env} mode`)
})