const Enquent = require("../db/models/enquentModels")

module.exports = {
    async getAllEnquentes(req,res){
       const enquentes = await Enquent.findAll()
       
       return res.json(enquentes).status(200)
    },

    async getOneEnquent(req,res){
        const id = req.params.id

        const enquent = await Enquent.findByPk(id)

        return res.json(enquent).status(200)
    },

    async postEnquent(req,res){
        const {titulo, op_one, op_two, op_three, op_four, start_date, finish_date} = req.body

        await Enquent.create({titulo, op_one, op_two, op_three, op_four, start_date, finish_date})
        .then(() => res.status(200).send("Criado com sucesso"))
        .catch(erro => res.status(400).send(`Erro: ${erro}`))
    },

    async modifyEnquent(req,res){
        const id = req.params.id

        const {titulo, op_one, op_two, op_three, op_four, start_date, finish_date} = req.body

        await Enquent.update({titulo, op_one, op_two, op_three, op_four, start_date, finish_date}, {where: {"id":id}})
        .then(() => res.status(200).send("Modificado"))
        .catch(error => res.send(`Erro: ${error}`).status(404))

    },

    async deleteEnquent(req,res){
        const id = req.params.id

        await Enquentes.destroy({where: {'id':id}})
        .then(() => res.send("Deleted").status(200))
        .catch(erro => res.send(`Erro: ${erro}`).status(404))
    },
}