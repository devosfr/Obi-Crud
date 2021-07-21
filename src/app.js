    const express = require('express');
    const cors = require('cors');
    const app = express();
    const User = require('../src/config/userModel');

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.json({ type: 'application/vnd.api+json' }));
    app.use(cors());

    app.post('/users', async(req, res) => {
        const { name, email } = req.body;
        await User.create({ name, email });
        res.status(200).json({ msn: 'Adicionado com Successo!' });
    });

    app.get('/users', async(req, res) => {
        const Users = await User.findAll();
        res.status(200).json(Users);
    });

    app.get('/users/:id', async(req, res) => {
        const UserById = await User.findByPk(req.params.id);
        res.status(200).json(UserById)
        res.status(200).json({ msn: 'Usuário encontrado com Successo!!' });
    });
    
    app.put('/users/:id', async(req, res) => {
        const { name, email } = req.body;
        const { id } = req.params;
        await User.update({ name, email }, { where: { id: id } });
        res.status(200).json({ msn: 'Atualiado com Successo!!' });
    });

    app.delete('/users/:id', async(req, res) => {
        const { id } = req.params;
        await User.destroy({
            where:{
                id: id, 
            }
        });
        res.status(200).json({ msn: 'Excluido com Successo!!' });
    });

    module.exports = app;