const Fornecedor = require('../models/Fornecedor')

const controller = {} //objeto vazio

controller.novo = async (req, res) => {
    try {
        await Fornecedor.create(req.body)
        // HTTP status 201: OK
        res.sendStatus(201)
    } 
    catch(erro) {
        console.log(erro)
        // HTTP Status 500: Internal Server Error
        res.status(500).send(erro)
    }
}

controller.listar = async (req, res) => {
    try{
        // find(), sem parâmetros, retorna todos
        const lista = await Fornecedor.find();
        res.send(lista); // HTTP 200 implícito
    } 
    catch(erro){
        console.log(erro);
        res.status(500).send(erro);
    }
}

controller.obterUm = async (req, res) => {
    try{
        const id = req.params.id;
        const obj = await Fornecedor.findById(id);
        if(obj){ // obj foi encontrado
            res.send(obj) // HTTP 200 implícito
        }
        else{
            // HTTP 404: Not Found
            res.status(404).end()
        }
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.atualizar = async (req, res) => {
    try{
        const id = req.body._id
        const obj = await Fornecedor.findByIdAndUpdate(id, req.body)
        if(obj){// Objeto encontrado e atualziado
            // HTTP 204: No Content
            res.status(204).end()
        }
        else{
            res.status(404).end()
        }
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.excluir = async(req, res) =>{
    try{
        const id = req.body._id
        const obj = await Fornecedor.findByIdAndDelete(id)
        if(obj){
            res.status(204).end()
        }
        else{
            res.status(404).end()
        }
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller