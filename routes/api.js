const express = require('express');

//modularizar as rotas
const router = express.Router();

//realiza a conexão com o banco de dados
const db = require('../db');

//criar as rotas: rota padrão/api/users/id
//CRUD
//cadatrar usuarios (CREATE)
router.post('/', (req, res)=>{
    const {nome, email} = req.body;
    //executar a instrução sql
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], (err, result)=>{
        if (err) return res.status(500).send(err);
        res.status(201).json({id: result.insertId, nome, email});
    });
});

//listar os usuarios (READ)
router.get('/', (req, res)=>{
    //executar a instrução SQL
    db.query('SELECT * FROM users', (err, results) =>{
         if (err) return res.status(500).send(err);
         res.json(results);
    });
});

//atualizar os dados de um usuario (UPDATE)
router.put('/:id', (req,res)=>{
    const {nome, email} = req.body;
    const {id} = req.params;

    db.query ('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) =>{
         if(err) return res.status(500).send(err);
         res.json({id,nome, email});
    });
});

//excluis um usuario (DELETE): /api/users/:id
//testar: /api/users/1 = deleta o user 1
router.delete('/:id', (req, res) =>{
    const {id} = req.params;// pegar o id do usuario no front
    //executar a instrução SQL
    db.query ('DELETE FROM users WHERE id = ?', [id], (err)=>{
        if(err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});


//exportar as rotas
module.exports = router;