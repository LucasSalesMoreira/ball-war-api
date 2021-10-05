const User = require('../models/User');
const validators = require('../validators/userValidator');
const yup = require('yup');

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
            const schema = yup.object().shape(validators.getValidator);
            const { id } = await schema.validate(req.params); 
            const user = await User.findByPk(id);
            return res.status(200).json({ ok: true, user });
        } catch (e) {
            return res.status(400).json({ ok: false, error: e.message });
        }
    },

    async add(req, res) {
        try {
            const schema = yup.object().shape(validators.addValidator);
            const { nick, password, icon_url } = await schema.validate(req.body);
            const user = await User.create({
                nick,
                password,
                icon_url
            });
            return res.status(200).json({ ok: true, user });
        } catch (e) {
            return res.status(400).json({ 
                ok: false, 
                error: e.message 
            });
        }
    },

    async login(req, res) {
        try {
            const schema = yup.object().shape(validators.addValidator);
            const { nick, password } = await schema.validate(req.body);
            const user = await User.findOne({
                where: { nick, password }
            });
            
            if (user) return res.status(200).json({ ok: true, user });

            return res.status(400).json({ ok: false, error: 'Acesso negado!' });

        } catch (e) {
            return res.status(400).json({ 
                ok: false,
                error: e.message
            });
        }
    }
};