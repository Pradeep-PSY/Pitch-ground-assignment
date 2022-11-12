
const express = require('express');
const connection = require('./config/db');
const cors = require('cors');
const todoController = require('./controller/todoController');
const app = express();
app.use(express.json());
app.use(cors());



app.get('/',(req,res)=>{
    res.send('welcome todo backend')
})

app.use('/todo-item',todoController)

app.listen(8000, async()=>{
    try{
        await connection
        console.log('server is started & db is connected')
    }
    catch(e){
        console.log(e)
    }
})