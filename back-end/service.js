const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModal = require('./modals/Users')

PORT = 8080;
DB_URL = 'mongodb+srv://admin:admin@merncrud.vvw3uq5.mongodb.net/?retryWrites=true&w=majority' ; 

const app = express();
app.listen(PORT, ()=>{
    console.log('server runs in port', PORT);
})

mongoose.connect(DB_URL);