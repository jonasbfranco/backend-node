const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
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

//app.get('/', routes.index);

//app.get('/usuarios', routes.user.index);

var port = 3000

app.listen({port}, function(){
    console.log(`Backend no ar na porta ${port}`);
});