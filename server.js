
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());

// conexão com banco
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'secretaria'
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar no banco:", err);
        return;
    }
    console.log("Conectado ao MySQL!");
});

// rota teste
app.get('/', (req,res)=>{
    res.send("API de alunos funcionando!");
});

// listar alunos
app.get('/alunos',(req,res)=>{
    connection.query("SELECT * FROM alunos",(err,results)=>{
        if(err){
            res.status(500).json(err);
            return;
        }
        res.json(results);
    });
});

// cadastrar aluno
app.post('/alunos',(req,res)=>{
    const {nome, idade, email} = req.body;

    const sql = "INSERT INTO alunos (nome, idade, email) VALUES (?, ?, ?)";

    connection.query(sql,[nome,idade,email],(err,result)=>{
        if(err){
            res.status(500).json(err);
            return;
        }

        res.json({
            mensagem:"Aluno cadastrado com sucesso",
            id: result.insertId
        });
    });
});

// deletar aluno
app.delete('/alunos/:id',(req,res)=>{
    const id = req.params.id;

    connection.query("DELETE FROM alunos WHERE id=?",[id],(err)=>{
        if(err){
            res.status(500).json(err);
            return;
        }

        res.json({mensagem:"Aluno deletado"});
    });
});

app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});


