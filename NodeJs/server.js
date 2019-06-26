const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()
app.use(express.json()) // Permite o recebimento de dados via json
app.use(cors()) // Permite que aplicações de outros dominios tenha acesso aos serviçoes da api desenvolvida

// Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

requireDir('./src/models')

// Testando se ja está funcionando
// const Product = mongoose.model('Product')

// Rotas
app.use('/api', require("./src/routes"))

app.listen(3001, () => {
    console.log("\nBackend sendo executado na porta 3001\n");
});