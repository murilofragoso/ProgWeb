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

module.exports = controller