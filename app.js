const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const routes = require ('./routes');

dotenv.config();

const app = express();
//const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
    return res.send('pong')
})

app.get('/', async (req, res) => {
    return res.json({
        erro: false,
        mensagem: "Listar usuários"
    })
})

app.post('/cadastrar', async (req, res) => {
    const password = await bcrypt.hash("123456", 8)

    console.log(password)

    return.json({
        erro: false,
        mensagem: "Cadastrar usuário"
    })
})

//app.get('/', routes.index);

//app.get('/usuarios', routes.user.index);

var port = 3000
