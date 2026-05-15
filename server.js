const express = require('express');
const app = express();
const port = 3000;

//definir o caminho
const path = require('path');
//disponibilizar os arquivos
app.use(express.static(path.join(__dirname, 'public')));

const db = require('./db');

//criar uma rota de teste
app.get('/', (req, res)=>{
    //res.send("front funcionando - agora com o nodemon");
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () =>{
    console.log("servidor funcionando");
})