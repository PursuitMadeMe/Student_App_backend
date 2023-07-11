//Import the App 
//Set/Start Up and Listen

//activate enviornmental variables from gitignore before running Express
require('dotenv').config()

//import app to server to handle HTTP request from App ROUTES
const app = require('./app')

//set enviornmental PORT to .env file PORT=8888 OR by Default 9000 
const PORT = process.env.PORT || 9000 

//Enviornment PORT assigned will Listen to the PORT=8888 from .env file
//give the App a listen function assigned to PORT 900 - SUCCESSFUL callback with message 'Listening on PORT" assigned
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}....`)
})

