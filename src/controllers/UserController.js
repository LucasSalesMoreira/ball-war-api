const User = require('../models/User');

module.exports = {
    async getAll(req, res) {
        try {
            const users = await User.findAll();
            return res.status(200).json({ ok: true, users }); 
        } catch (error) {
            return res.status(400).json({ ok: false, error });
        }
    },

    async get(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            return res.status(200).json({ ok: true, user });
        } catch (error) {
            return res.status(400).json({ ok: false, error });
        }
    },

    async add(req, res) {
        try {
            const { nick, password, icon_url } = req.body;
            const user = await User.create({
                nick,
                password,
                icon_url
            });
            return res.status(200).json({ ok: true, user });
        } catch (error) {
            return res.status(400).json({ 
                ok: false, 
                error: 'O nick já existe!' 
            });
        }
    },

    async login(req, res) {
        try {
            const { nick, password } = req.body;
            const user = await User.findOne({
                where: { nick, password }
            });
            
            if (user) return res.status(200).json({ ok: true, user });

            return res.status(400).json({ ok: false, error: 'Acesso negado!' });

        } catch (error) {
            console.error(error);
            return res.status(400).json({ 
                ok: false,
                error: 'Algo deu errado, falha no processo de login!'
            });
        }
    }
};