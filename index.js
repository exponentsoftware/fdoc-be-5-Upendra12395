const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const config_data = require('../config.json')
const todoRouter = require('./routes/todo')
const userRouter = require('./routes/user')
const app = express();
app.use(express.json());

app.use(cors());
const PORT = config_data.PORT || 5000;
const password = config_data.PASSWORD;
const mongooseURL = `mongodb+srv://upendraa:${password}@cluster0.mwuaz.mongodb.net/mytodo3?retryWrites=true&w=majority`;

mongoose.connect(mongooseURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use('/todo', todoRouter)
app.use('/user', userRouter)
app.get('/', (req, res) =>{
    res.send("hello")
})

mongoose.Promise = global.Promise;
mongoose.connection.on('open', ()=>{
    console.log("connected")
})

app.listen(PORT, ()=>{
    console.log(`app running on port no ${PORT}`)
})