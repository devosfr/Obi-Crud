const express = require('express');
const routes = express.Router();
const User = require('./userModel');

routes.post("/", async (req, res) => {
    const { name, email } = req.body;
    await User.create({ name, email });
    res.status(200).json({ msn: 'Adicionado com Successo!' });
});

routes.get("/", async (req, res) => {
    const Users = await User.findAll();
    res.status(200).json(Users);
});

routes.get("/:id", async (req, res) => {
    const UserById = await User.findByPk(req.params.id);
    res.status(200).json(UserById);
});

routes.put("/:id", async (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;
    User.update({ name, email }, { where: { id: id } });
    res.status(200).json({ message: "Editado!!" });
});

routes.delete("/:id", async (req, res) => {
    const { id } = req.params;
        await User.destroy({
            where: {
                id: id,
            }
        });
        res.status(200).json({ msn: 'Excluido com Successo!!' });
});


module.exports = routes;